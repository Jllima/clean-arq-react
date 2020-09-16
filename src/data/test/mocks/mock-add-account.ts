import faker from 'faker'
import { AccountParams } from '@/domain/usercases'

export const mockAccountParams = (): AccountParams => {
  const password = faker.internet.password()

  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: password,
    passwordConfirmation: password
  }
}
