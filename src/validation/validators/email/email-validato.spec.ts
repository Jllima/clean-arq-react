import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors'

describe('EmailValidation', () => {
  test('Shold return error if email is invalid', () => {
    const sut = EmailValidation
    const error = sut.validate('email', '')
    expect(error).toEqual(new InvalidFieldError('email'))
  })
})
