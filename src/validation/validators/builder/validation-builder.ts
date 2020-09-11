import { RequiredFiedlValidation, EmailValidation, MinLengthValidation } from '@/validation/validators'
import { FieldValidation } from '@/validation/protocols'

export class ValidationBuider {
  constructor (
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field (fieldName: string): ValidationBuider {
    return new ValidationBuider(fieldName, [])
  }

  required (): ValidationBuider {
    this.validations.push(new RequiredFiedlValidation(this.fieldName))
    return this
  }

  email (): ValidationBuider {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  min (length: number): ValidationBuider {
    this.validations.push(new MinLengthValidation(this.fieldName, length))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}
