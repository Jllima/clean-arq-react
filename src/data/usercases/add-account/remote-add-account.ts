import { AddAccont, AccountParams } from '@/domain/usercases'
import { HttpPostClient } from '@/data/protocols/http'
import { AccountModel } from '@/domain/models'

export class RemoteAddAccount implements AddAccont {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AccountParams, AccountModel>
  ) { }

  async add (params: AccountParams): Promise<AccountModel> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    return null
  }
}
