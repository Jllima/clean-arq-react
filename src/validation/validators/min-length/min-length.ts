import { FieldValidation } from '@/validation/protocols'
import { MinLengthFieldError } from '@/validation/errors'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field, private readonly minLength: number) {}

  validate (value: string): Error {
    return value.length >= this.minLength ? null : new MinLengthFieldError(this.field)
  }
}
