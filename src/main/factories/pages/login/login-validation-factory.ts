import { ValidationComposite, ValidationBuider } from '@/validation/validators'

export const makeLoginValidation = (): ValidationComposite => {
  return ValidationComposite.build([
    ...ValidationBuider.field('email').required().email().build(),
    ...ValidationBuider.field('password').required().min(5).build()
  ])
}
