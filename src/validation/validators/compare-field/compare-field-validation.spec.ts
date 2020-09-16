import faker from 'faker'
import { InvalidFieldError } from '@/validation/errors'
import { CompareFieldValidation } from './compare-field-validation'

type sutTypes = {
  sut: CompareFieldValidation
  fieldName: string
}

const makeSut = (): sutTypes => {
  const fieldName = faker.random.word()
  const sut = new CompareFieldValidation(fieldName, faker.random.word())
  return {
    sut,
    fieldName
  }
}

describe('CompareFieldValidation', () => {
  test('Should return error if compare is invalid', () => {
    const { sut, fieldName } = makeSut()
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError(fieldName))
  })
})
