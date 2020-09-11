import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldError } from '@/validation/errors/invalid-field-error'

export const EmailValidation: FieldValidation = {
  validate (field: string, value: string): Error {
    return new InvalidFieldError(field)
  }
}
