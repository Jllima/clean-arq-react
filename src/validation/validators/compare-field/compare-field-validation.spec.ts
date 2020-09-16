import faker from 'faker'
import { InvalidFieldError } from '@/validation/errors'
import { CompareFieldValidation } from './compare-field-validation'

type sutTypes = {
  sut: CompareFieldValidation
  fieldName: string
}

const makeSut = (valueToCompare: string): sutTypes => {
  const fieldName = faker.random.word()
  const sut = new CompareFieldValidation(fieldName, valueToCompare)
  return {
    sut,
    fieldName
  }
}

describe('CompareFieldValidation', () => {
  test('Should return error if compare is invalid', () => {
    const valueToCompare = faker.random.word()
    const { sut, fieldName } = makeSut(valueToCompare)
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError(fieldName))
  })

  test('Shold return falsy if password is valid', () => {
    const valueToCompare = faker.random.word()
    const { sut } = makeSut(valueToCompare)
    const error = sut.validate(valueToCompare)
    expect(error).toBeFalsy()
  })
})
