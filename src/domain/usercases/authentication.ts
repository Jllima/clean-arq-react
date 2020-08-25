import { AccountModel } from '../models/account-model'

type AuthenticateParams = {
  email: string
  password: string
}

export interface Authentication {
  auth(params: AuthenticateParams): Promise<AccountModel>
}
