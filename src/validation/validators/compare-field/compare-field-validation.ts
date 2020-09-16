import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldError } from '@/validation/errors'

export class CompareFieldValidation implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly valueToCompare: string
  ) { }

  validate (value: string): Error {
    return value === this.valueToCompare ? null : new InvalidFieldError(this.field)
  }
}
