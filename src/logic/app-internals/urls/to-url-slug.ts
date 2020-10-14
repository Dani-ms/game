import slugify from "slugify"

export function toUrlSlug(input: string) {
  return slugify(input, { lower: true, strict: true })
}
