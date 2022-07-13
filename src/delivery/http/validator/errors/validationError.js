export class ValidationError extends Error {
  constructor(joiErrorDetails: Array<{}> | undefined, message?: string) {
    super()

    this.message = joiErrorDetails
      ? `Validation failed. Context: ` + JSON.stringify(joiErrorDetails)
      : message || 'Unknown Validation Error'

    this.name = 'ValidationError'
  }
}