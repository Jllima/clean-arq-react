import { mockAccountModel } from '@/domain/test'
import faker from 'faker'
import { HttpPostClientSpy } from '@/data/test/mocks'
import { AccountParams } from '@/domain/usercases'
import { AccountModel } from '@/domain/models'
import { RemoteAddAccount } from './remote-add-account'
import { mockAccountParams } from '@/data/test/mocks/mock-add-account'
import { HttpStatusCode } from '@/data/protocols/http'
import { EmailInUseError } from '@/domain/errors/email-in-use-error'
import { UnexpectedError } from '@/domain/errors'

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

  test('Shold RemoteAddAccount call HttpPostClient with correct body', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    const addAccountParams = mockAccountParams()
    await sut.add(addAccountParams)
    expect(httpPostClientSpy.body).toEqual(addAccountParams)
  })

  test('Shold throw EmailUserError if HttpPostClient returns 403', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }
    const promise = sut.add(mockAccountParams())
    await expect(promise).rejects.toThrow(new EmailInUseError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.add(mockAccountParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.add(mockAccountParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.add(mockAccountParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an AccountModel if HttpPostClient returns 200', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const httpResult = mockAccountModel()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const account = await sut.add(mockAccountParams())
    expect(account).toEqual(httpResult)
  })
})
