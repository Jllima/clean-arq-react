import { MinLengthValidation } from './min-length'
import { MinLengthFieldError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (): MinLengthValidation => new MinLengthValidation(6)

describe('MinLengthValidation', () => {
  test('Should return error if field is invalid', () => {
    const sut = makeSut()
    const error = sut.validate('field_name', faker.random.alphaNumeric(4))
    expect(error).toEqual(new MinLengthFieldError('field_name'))
  })
  test('Should return falsy if field is valid', () => {
    const sut = makeSut()
    const error = sut.validate('field_name', faker.random.alphaNumeric(6))
    expect(error).toBeFalsy()
  })
})
