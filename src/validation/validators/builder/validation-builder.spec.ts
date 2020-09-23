import { RequiredFiedlValidation, EmailValidation, MinLengthValidation, CompareFieldValidation } from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-builder'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFiedlValidation(field)])
  })
  test('Should return EmailValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })
  test('Should return EmailValidation', () => {
    const field = faker.database.column()
    const length = faker.random.number()
    const validations = sut.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  test('Should return CompareFieldsValidation', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const validations = sut.field(field).sameAs(fieldToCompare).build()
    expect(validations).toEqual([new CompareFieldValidation(field, fieldToCompare)])
  })

  test('Shold rettun a list of validations ', () => {
    const field = faker.database.column()
    const length = faker.random.number()
    const validations = sut.field(field).required().email().min(length).build()
    expect(validations).toEqual([
      new RequiredFiedlValidation(field),
      new EmailValidation(field),
      new MinLengthValidation(field, length)
    ])
  })
})
