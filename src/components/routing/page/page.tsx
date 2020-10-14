import { graphql, StaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import { Helmet } from "react-helmet"
import { throwError } from "src/logic/app-internals/utils/throw-error"
import { Header } from "./components/header"

type Props = {
  cover?: () => ReactNode
  children: (props: { siteUrl: string }) => ReactNode
  title: string
  noContainment?: boolean
  noTopPadding?: boolean
  noBottomPadding?: boolean
}

export function Page(props: Props) {
  return (
    <StaticQuery<GQLPageQueryQuery>
      query={graphql`
        query PageQuery {
          site {
            siteMetadata {
              title
              siteUrl
            }
          }
        }
      `}
      render={({ site }) => {
        const siteTitle = site?.siteMetadata?.title || throwError()
        const siteUrl = site?.siteMetadata?.siteUrl || throwError()

        return (
          <div className="d-flex flex-column min-vh-100">
            <Helmet
              titleTemplate={`%s | ${siteTitle}`}
              htmlAttributes={{
                lang: "pt-BR",
              }}
              title={props.title}
              meta={[
                {
                  property: `og:title`,
                  content: props.title,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:title`,
                  content: props.title,
                },
              ]}
            />
            <Header />

            <main className="flex-grow-1">
              {props.cover ? props.cover() : null}
              <div
                className={`${props.noContainment ? "" : "container"} ${
                  props.noTopPadding ? "" : "pt-5"
                } ${props.noBottomPadding ? "" : "pb-5"}`}
              >
                {props.children({ siteUrl })}
              </div>
            </main>

            <footer className={`bg-dark text-white w-100 py-4`}>
              <p className={`text-center`}>
                Copyright © {new Date().getFullYear()},{` `}Eliseu e Cecilia -
                Representações Comerciais
              </p>
              <p className={`text-center`}>Teste</p>
            </footer>
          </div>
        )
      }}
    />
  )
}
