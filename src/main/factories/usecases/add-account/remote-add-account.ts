import { makeApiUrl } from './../../http/api-url-factory'
import { AddAccont } from '@/domain/usercases'
import { RemoteAddAccount } from '@/data/usercases/add-account/remote-add-account'
import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'

export const makeAddRemoteAccount = (): AddAccont => {
  return new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
}
