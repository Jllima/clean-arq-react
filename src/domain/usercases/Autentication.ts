import { AccountModel } from '../models/AccountModel'

type AuthenticateParams = {
  email: string
  password: string
}

export interface Authentication {
  auth(params: AuthenticateParams): Promise<AccountModel>
}
