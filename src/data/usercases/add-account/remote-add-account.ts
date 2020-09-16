import { AddAccont, AccountParams } from '@/domain/usercases'
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { AccountModel } from '@/domain/models'
import { EmailInUseError } from '@/domain/errors/email-in-use-error'
import { UnexpectedError } from '@/domain/errors'

export class RemoteAddAccount implements AddAccont {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AccountParams, AccountModel>
  ) { }

  async add (params: AccountParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden: throw new EmailInUseError()
      default: throw new UnexpectedError()
    }
  }
}
