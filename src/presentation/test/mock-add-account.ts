import { AccountModel } from '@/domain/models'
import { AccountParams, AddAccont } from '@/domain/usercases'

export class AddAccountSpy implements AddAccont {
  params: AccountParams
  account: AccountModel

  async add (params: AccountParams): Promise<AccountModel> {
    this.params = params
    return this.account
  }
}
