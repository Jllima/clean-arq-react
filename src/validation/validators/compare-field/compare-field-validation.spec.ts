import faker from 'faker'
import { InvalidFieldError } from '@/validation/errors'
import { CompareFieldValidation } from './compare-field-validation'

const makeSut = (fieldName: string, fieldToCompare: string): CompareFieldValidation => {
  return new CompareFieldValidation(fieldName, fieldToCompare)
}

describe('CompareFieldValidation', () => {
  test('Should return error if compare is invalid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({
      [field]: faker.random.word(),
      [fieldToCompare]: faker.random.word()
    })
    expect(error).toEqual(new InvalidFieldError(field))
  })

  test('Shold return falsy if password is valid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const value = faker.random.word()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({
      [field]: value,
      [fieldToCompare]: value
    })
    expect(error).toBeFalsy()
  })
})
