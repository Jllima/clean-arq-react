import { RequiredFiedlValidation } from './required-field-validation'
import { RequiredFieldError } from '@/validation/errors'
import faker from 'faker'

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = RequiredFiedlValidation
    const error = sut.validate('field_name', '')
    expect(error).toEqual(new RequiredFieldError())
  })
  test('Should return false if field is not empty', () => {
    const sut = RequiredFiedlValidation
    const error = sut.validate('field_name', faker.random.words())
    expect(error).toBeFalsy()
  })
})
