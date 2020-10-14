import { EnumBase } from "./enum-types"
import { getEnumValues } from "./get-enum-values"

export const isValueFromEnum = <T extends EnumBase>(
  e: T,
  token: any
): token is T[keyof T] => getEnumValues(e).includes(token)
