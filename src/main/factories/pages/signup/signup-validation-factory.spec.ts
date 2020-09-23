import { makeSignUpvalidation } from './signup-validation-factory'
import { ValidationComposite, ValidationBuilder as Builder } from '@/validation/validators'

describe('LoginValidationFactory', () => {
  test('Shold make ValidationComposite with correct validations', () => {
    const sut = makeSignUpvalidation()
    expect(sut).toEqual(ValidationComposite.build([
      ...Builder.field('name').required().min(5).build(),
      ...Builder.field('email').required().email().build(),
      ...Builder.field('password').required().min(5).build(),
      ...Builder.field('passwordConfirmation').required().sameAs('password').build()
    ]))
  })
})
