import { ValidationComposite, ValidationBuider } from '@/validation/validators'
import { makeLoginValidation } from './login-validation-factory'

describe('LoginValidationFactory', () => {
  test('Shold make ValidationComposite with correct validations', () => {
    const sut = makeLoginValidation()
    expect(sut).toEqual(ValidationComposite.build([
      ...ValidationBuider.field('email').required().email().build(),
      ...ValidationBuider.field('password').required().min(5).build()
    ]))
  })
})
