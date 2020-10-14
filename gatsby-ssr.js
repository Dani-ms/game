/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react"
import { RootFrame } from "./src/components/root-frame/root-frame"
import { attachMaterialIconProviders } from "./src/components/ui-kit/components/material-icon/material-icon-ssr-apis"
import { attachFontProviders } from "./src/components/ui-kit/fonts-ssr-apis"

export const wrapRootElement = ({ element, props }) => (
  <RootFrame {...props}>{element}</RootFrame>
)

export const onPreRenderHTML = (...args) => {
  attachFontProviders(...args)
  attachMaterialIconProviders(...args)
}
