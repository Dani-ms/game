import { PreRenderHTMLArgs } from "gatsby"
import React from "react"

export const attachMaterialIconProviders = async ({
  getPostBodyComponents,
  replacePostBodyComponents,
}: PreRenderHTMLArgs) => {
  const elements = getPostBodyComponents()

  replacePostBodyComponents([
    ...elements,
    <link
      key={"material-icons-stylesheet"}
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />,
  ])
}
