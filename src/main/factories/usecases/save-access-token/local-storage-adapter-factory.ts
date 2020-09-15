import { LocalSaveAccessToken } from '@/data/usercases/save-access-token/local-save-access-token'
import { SaveAccessToken } from '@/domain/usercases'
import { makeLocalStorageAdapter } from '../../cache/local-storage-adapter-factory'

export const makeLocalSaveAcessToken = (): SaveAccessToken => {
  return new LocalSaveAccessToken(makeLocalStorageAdapter())
}
