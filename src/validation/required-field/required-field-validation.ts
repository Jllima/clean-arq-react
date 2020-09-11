import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldError } from '@/validation/errors'

export const RequiredFiedlValidation: FieldValidation = {
  validate (field: string, value: string): Error {
    return value ? null : new RequiredFieldError()
  }
}
