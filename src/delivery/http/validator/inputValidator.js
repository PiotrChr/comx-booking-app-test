import { ValidationError } from './Errors/ValidationError'
import { input } from './Validations/Input/input'

const validations = {
  ...input,
}

export const validate = (fieldSet: string, props: { [key: string]: any }) => {
  const validation = validations[fieldSet]
  if (!validation) {
    // TODO: Add new exception/error for this one here
    throw new ValidationError(undefined, `No validation found for fieldSet ${fieldSet}`)
  }

  const { error } = validation.validate()

  if (error) {
    throw new ValidationError(error.details)
  }
}