import { HttpPostParams } from '@/data/protocols/http'
import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()
const mockRequest = (): HttpPostParams<any> => (
  {
    url: faker.internet.url(),
    body: faker.random.objectElement()
  }
)

describe('AxiosHttpClient', () => {
  test('Shold call axios with correct values', async () => {
    const request = mockRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})
