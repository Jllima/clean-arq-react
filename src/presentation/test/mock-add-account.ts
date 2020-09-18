import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'
import { AccountParams, AddAccont } from '@/domain/usercases'

export class AddAccountSpy implements AddAccont {
  params: AccountParams
  account: AccountModel = mockAccountModel()
  callsCount: number = 0

  async add (params: AccountParams): Promise<AccountModel> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
