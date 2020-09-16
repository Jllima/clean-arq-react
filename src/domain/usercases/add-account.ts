import { AccountModel } from '@/domain/models'

export type AccountParams = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface AddAccont {
  add: (params: AccountParams) => Promise<AccountModel>
}
