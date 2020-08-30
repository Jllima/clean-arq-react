import { AuthenticationParams } from '@/domain/usercases/authentication'
import { AccountModel } from '@/domain/models/account-model'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accesToken: faker.random.uuid()
})
