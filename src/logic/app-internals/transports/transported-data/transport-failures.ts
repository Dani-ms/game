export enum TransportFailure {
  ConnectionFailure = "connection-failure",
  UnexpectedResponse = "unexpected-response",
  AbortedAndDealtWith = "aborted-and-dealt-with",
  Forbidden = "forbidden",
  LogicError = "logic-error",
}

export const TRANSPORT_FAILURES = [
  TransportFailure.ConnectionFailure,
  TransportFailure.AbortedAndDealtWith,
] as const
