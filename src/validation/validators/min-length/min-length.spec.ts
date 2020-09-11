import { MinLengthValidation } from './min-length'
import { MinLengthFieldError } from '@/validation/errors'
import faker from 'faker'

type sutTypes = {
  sut: MinLengthValidation
  fieldName: string
}

const makeSut = (): sutTypes => {
  const fieldName = faker.database.column()
  const sut = new MinLengthValidation(fieldName, 6)
  return {
    sut,
    fieldName
  }
}
describe('MinLengthValidation', () => {
  test('Should return error if field is invalid', () => {
    const { sut, fieldName } = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new MinLengthFieldError(fieldName))
  })
  test('Should return falsy if field is valid', () => {
    const { sut } = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(6))
    expect(error).toBeFalsy()
  })
})
