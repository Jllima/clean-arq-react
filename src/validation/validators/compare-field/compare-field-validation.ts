import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldError } from '@/validation/errors'

export class CompareFieldValidation implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly compareField: string
  ) { }

  validate (value: string): Error {
    return new InvalidFieldError(this.field)
  }
}
