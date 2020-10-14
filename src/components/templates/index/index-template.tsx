import React from "react"
import { Page } from "src/components/routing/page/page"
import { throwError } from "src/logic/app-internals/utils/throw-error"
import { INDEX_ROUTE } from "./index-routes"
import styles from "./index-template.module.scss"

// import { LinkAnchor } from 'src/components/ui-kit/protons/link-anchor/link-anchor'

type Props = {}

export function IndexTemplate(props: Props) {
  return (
    <Page noContainment noTopPadding title={INDEX_ROUTE.label}>
      {() => {
        return (
          <div className={`${styles["home-page"] || throwError()}`}>
            <section
              className={`${
                styles["home-page__hero-section"] || throwError()
              } cover bg-primary d-flex justify-content-center align-items-center mb-6`}
            >
              <div className={`text-center cover-blurred-box`}>
                <h1 className="text-white display-1">
                  <br />
                  <span className="text-white d-block mt-3 display-3 h3 mb-0">
                    Representações comerciais de artigos de <br />
                    <span className="text-shadow">to replace</span>
                  </span>
                </h1>
              </div>
            </section>
            <section className="container">
              <p>
                {" "}
                Somos o Eliseu Santos e Cecilia Santos Representações
                Comerciais, trabalhamos há mais de 25 anos no mercado de
                representações comerciais, em São Paulo e alguns estados do
                Brasil. Fornecendo os melhores produtos, com os melhores preços
                em diversos segmentos.{" "}
              </p>
              <p>
                Neste site conseguirá ver as empresas que representamos e a gama
                de produtos que temos para coloquerem nas suas lojas. Ao
                escolher os produtos que necessitam envie-nos o código dos
                produtos por , para realizar uma cotação.
              </p>
              <p> Para saber mais sobre o nosso trabalho </p>
            </section>
            <section className="container">
              <div className="row ">
                <div className="col-6 text-center"></div>
                {/* <div className="col-6">
                  
                </div> */}
              </div>
            </section>
          </div>
        )
      }}
    </Page>
  )
}
