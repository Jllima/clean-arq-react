import { SetStorageMock } from '@/data/test/mocks'
import faker from 'faker'
import { LocalSaveAccessToken } from './local-save-access-token'

type SutTypes = {
  sut: LocalSaveAccessToken
  setStorageMock: SetStorageMock
}

const makeSut = (): SutTypes => {
  const setStorageMock = new SetStorageMock()
  const sut = new LocalSaveAccessToken(setStorageMock)
  return {
    sut,
    setStorageMock
  }
}

describe('LocalSaveAccessToken', () => {
  test('Shold call SetStorage with correct value', async () => {
    const { sut, setStorageMock } = makeSut()
    const accesToken = faker.random.uuid()
    await sut.save(accesToken)
    expect(setStorageMock.key).toEqual('accessToken')
    expect(setStorageMock.value).toEqual(accesToken)
  })
})
