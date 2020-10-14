import { getEnumValues } from "../../utils/enums/get-enum-values"
import { TransportFailure } from "./transport-failures"

const transportFailures = getEnumValues(TransportFailure)

export function isTransportFailure(t: any): t is TransportFailure {
  return transportFailures.includes(t as any)
}
