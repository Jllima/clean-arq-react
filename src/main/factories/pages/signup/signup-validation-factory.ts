import { ValidationComposite, ValidationBuilder as Builder } from '@/validation/validators'

export const makeSignUpvalidation = (): ValidationComposite => {
  return ValidationComposite.build([
    ...Builder.field('name').required().min(5).build(),
    ...Builder.field('email').required().email().build(),
    ...Builder.field('password').required().min(5).build(),
    ...Builder.field('passwordConfirmation').required().min(5).build()
  ])
}
