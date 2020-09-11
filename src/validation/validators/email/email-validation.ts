import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldError } from '@/validation/errors/invalid-field-error'

export const EmailValidation: FieldValidation = {
  validate (field: string, value: string): Error {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    return (!value || emailRegex.test(value)) ? null : new InvalidFieldError(field)
  }
}
