exports.throwIfNotFilledString = (input, errorMessage) => {
  if (
    !(
      // ACCEPTANCE CRITERIA
      // MUST BE A STRING
      (
        typeof input === "string" &&
        // MUST BE FILLED
        input.trim().length > 0
      )
    )
  )
    throw new Error(
      typeof errorMessage === "undefined"
        ? undefined
        : typeof errorMessage === "string"
        ? errorMessage
        : "[Invalid errorMessage parameter]"
    )
  else return input
}
