import { ValidationComposite, ValidationBuilder } from '@/validation/validators'
import { makeLoginValidation } from './login-validation-factory'

describe('LoginValidationFactory', () => {
  test('Shold make ValidationComposite with correct validations', () => {
    const sut = makeLoginValidation()
    expect(sut).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('email').required().email().build(),
      ...ValidationBuilder.field('password').required().min(5).build()
    ]))
  })
})
