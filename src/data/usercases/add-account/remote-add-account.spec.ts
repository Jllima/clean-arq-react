import faker from 'faker'
import { HttpPostClientSpy } from '@/data/test/mocks'
import { AccountParams } from '@/domain/usercases'
import { AccountModel } from '@/domain/models'
import { RemoteAddAccount } from './remote-add-account'
import { mockAccountParams } from '@/data/test/mocks/mock-add-account'

type sutTypes = {
  sut: RemoteAddAccount
  httpPostClientSpy: HttpPostClientSpy<AccountParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): sutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AccountParams, AccountModel>()
  const sut = new RemoteAddAccount(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAddAccount', () => {
  test('Shold RemoteAddAccount call HttpPostClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.add(mockAccountParams())
    expect(httpPostClientSpy.url).toEqual(url)
  })
})
