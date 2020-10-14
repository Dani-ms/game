declare module "*.module.css" {
  const classes: { [key: string]: string | undefined }
  export default classes
}

declare module "*.module.scss" {
  const classes: { [key: string]: string | undefined }
  export default classes
}

declare module "*.module.sass" {
  const classes: { [key: string]: string | undefined }
  export default classes
}

declare module "*.module.less" {
  const classes: { [key: string]: string | undefined }
  export default classes
}

declare module "*.bmp" {
  const src: string
  export default src
}

declare module "*.gif" {
  const src: string
  export default src
}

declare module "*.jpg" {
  const src: string
  export default src
}

declare module "*.jpeg" {
  const src: string
  export default src
}

declare module "*.png" {
  const src: string
  export default src
}

declare module "*.webp" {
  const src: string
  export default src
}

declare module "*.svg" {
  const src: string
  export default src
}

type NoFluxAction = {
  type: "No Action Type. If you see this, \
it means you are not supposed to dispatch or have an action in this part of the code. \
Check the Typescript types envolved in this flow."
}
