import { RequiredFiedlValidation } from '@/validation/validators/required-field'
import { ValidationBuider as sut } from './validation-builder'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const validations = sut.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFiedlValidation('any_field')])
  })
})
