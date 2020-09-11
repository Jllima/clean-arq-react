import { FieldValidation } from '@/validation/protocols'
import { MinLengthFieldError } from '@/validation/errors'

export class MinLengthValidation implements FieldValidation {
  constructor (private readonly minLength: number) {}

  validate (field: string, value: string): Error {
    return value.length >= this.minLength ? null : new MinLengthFieldError(field)
  }
}
