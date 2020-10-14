import { FluidObject } from "gatsby-image"
import { throwError } from "src/logic/app-internals/utils/throw-error"

export function throwIfNotFluidImage(
  input: { [K in keyof FluidObject]?: FluidObject[K] | null | undefined }
): FluidObject {
  return {
    aspectRatio:
      typeof input.aspectRatio === "number" ? input.aspectRatio : throwError(),
    src: typeof input.src === "string" ? input.src : throwError(),
    srcSet: typeof input.srcSet === "string" ? input.srcSet : throwError(),
    sizes: typeof input.sizes === "string" ? input.sizes : throwError(),
    base64: typeof input.base64 === "string" ? input.base64 : undefined,
    tracedSVG:
      typeof input.tracedSVG === "string" ? input.tracedSVG : undefined,
    srcWebp: typeof input.srcWebp === "string" ? input.srcWebp : undefined,
    srcSetWebp:
      typeof input.srcSetWebp === "string" ? input.srcSetWebp : undefined,
    media: typeof input.media === "string" ? input.media : undefined,
  }
}
