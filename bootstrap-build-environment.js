require("ts-node/register/transpile-only")

exports.ALL_BUILD_VARIANTS = {
  DEBUG: "debug",
  RELEASE: "release",
}

exports.currentBuildVariant = (() => {
  switch (process.env.NODE_ENV) {
    case "development":
      return exports.ALL_BUILD_VARIANTS.DEBUG
    case "production":
      return exports.ALL_BUILD_VARIANTS.RELEASE
    default:
      throw new Error("Unknown environment. Make sure NODE_ENV is set.")
  }
})()

const tsConfig = require(exports.currentBuildVariant ===
  exports.ALL_BUILD_VARIANTS.DEBUG
  ? "./tsconfig.json"
  : `./tsconfig.${exports.currentBuildVariant}.json`)
const tsConfigPaths = require("tsconfig-paths")

tsConfigPaths.register({
  baseUrl: "./",
  paths: tsConfig.compilerOptions.paths,
})
