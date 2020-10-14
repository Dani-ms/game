import { PreRenderHTMLArgs } from "gatsby"
import React from "react"

export const attachFontProviders = async ({
  getPostBodyComponents,
  replacePostBodyComponents,
}: PreRenderHTMLArgs) => {
  const elements = getPostBodyComponents()

  replacePostBodyComponents([
    ...elements,
    <link
      key={"google-fonts-stylesheet"}
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap"
      rel="stylesheet"
    />,
  ])
}
