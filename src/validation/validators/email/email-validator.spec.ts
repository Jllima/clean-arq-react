import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'

type sutTypes = {
  sut: EmailValidation
  fieldName: string
}

const makeSut = (): sutTypes => {
  const fieldName = faker.database.column()
  const sut = new EmailValidation(fieldName)
  return {
    sut,
    fieldName
  }
}

describe('EmailValidation', () => {
  test('Shold return error if email is invalid', () => {
    const { sut, fieldName } = makeSut()
    const error = sut.validate(fieldName)
    expect(error).toEqual(new InvalidFieldError(fieldName))
  })
  test('Shold return falsy if email is valid', () => {
    const { sut } = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
  test('Shold return falsy if email is empty', () => {
    const { sut } = makeSut()
    const error = sut.validate('')
    expect(error).toBeFalsy()
  })
})
