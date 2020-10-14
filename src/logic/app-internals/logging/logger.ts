const LOG_LIMIT_PER_ERROR_TYPE = 3

class LoggerClass {
  private loggedErrors: { [key: string]: undefined | number } = {}

  logError(
    errorKey: string,
    /*
      In Javascript, any value type can be thrown,
      so we don't know if a caught value is actually an Error instance.
    */
    caughtValue: unknown,
    extraData?: unknown
  ) {
    const numberOfTimesLogged = this.loggedErrors[errorKey] || 0

    if (numberOfTimesLogged < LOG_LIMIT_PER_ERROR_TYPE) {
      const caughtValueIsInstanceOfError = caughtValue instanceof Error
      const error = caughtValueIsInstanceOfError
        ? (caughtValue as Error)
        : new Error()

      console.info("Logged error with key: " + errorKey)
      console.info("Error extra data:", extraData)

      if (!caughtValueIsInstanceOfError) {
        console.info("Caught value is not an instance of Error:", caughtValue)
      }

      console.error(error)

      // TODO: implement telemetry

      this.loggedErrors[errorKey] = numberOfTimesLogged + 1
    }
  }
}

export const Logger = new LoggerClass()
