import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'

describe('EmailValidation', () => {
  test('Shold return error if email is invalid', () => {
    const sut = EmailValidation
    const error = sut.validate('email', faker.random.words())
    expect(error).toEqual(new InvalidFieldError('email'))
  })
  test('Shold return falsy if email is valid', () => {
    const sut = EmailValidation
    const error = sut.validate('email', faker.internet.email())
    expect(error).toBeFalsy()
  })
})
