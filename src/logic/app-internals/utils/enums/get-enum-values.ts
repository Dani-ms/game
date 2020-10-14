import { EnumBase } from "./enum-types"

export function getEnumValues<T extends EnumBase>(arg: T): Array<T[keyof T]> {
  return (Object.keys(arg)
    .filter(k => {
      // Only pick the enum's named keys
      return !(k[0] >= "0" && k[0] <= "9")
    })
    .map(k => arg[k as keyof T]) as any) as Array<T[keyof T]>
}
