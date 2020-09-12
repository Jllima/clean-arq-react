import { AxiosHttpClient } from '@/infra/http/axios-http-clint/axios-http-client'

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
