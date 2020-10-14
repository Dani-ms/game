const path = require("path")

const {
  currentBuildVariant,
  ALL_BUILD_VARIANTS,
} = require("./bootstrap-build-environment")
const { COMMON_CONFIG } = require(`@config/common-config`)
const { CONTENT_CONFIG } = require(`@config/content-config`)
const { throwIfNotFilledString } = require("./build-values-validation")

const siteUrl = throwIfNotFilledString(COMMON_CONFIG.siteUrl)

if (
  !(
    // ACCEPTANCE CRITERIA
    (
      (siteUrl.startsWith("https://") || siteUrl.startsWith("http://")) &&
      !siteUrl.endsWith("/")
    )
  )
) {
  throw new Error()
}
const contentRelativePath = throwIfNotFilledString(CONTENT_CONFIG.relativePath)

module.exports = {
  siteMetadata: {
    siteUrl,
    title: `Artspaper`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/components/ui-kit/global-styles/include-path"],
        cssLoaderOptions: {
          localsConvention: "asIs",
          camelCase: false,
        },
      },
    },
    "gatsby-plugin-typescript",
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    /*
      WARNING:
      do not point a gatsby-source-filesystem instance to the root of the project,
      as it will listen for file changes in Gatsby internal directories like .cache
      and will start looping.
    */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src-assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.resolve(__dirname, contentRelativePath),
      },
    },
    // //{
    //  resolve: `gatsby-transformer-csv`,
    //  options: {
    //    delimiter: ';',
    //  },
    //},

    ...(() => {
      if (currentBuildVariant === ALL_BUILD_VARIANTS.RELEASE) {
        return [
          {
            resolve: "gatsby-plugin-webpack-bundle-analyzer",
            options: {
              analyzerMode: "disabled",
              generateStatsFile: true,
              production: true,
              statsFilename: "webpack-bundle-analyzer-stats.json",
            },
          },
        ]
      } else {
        return []
      }
    })(),
  ],
}
