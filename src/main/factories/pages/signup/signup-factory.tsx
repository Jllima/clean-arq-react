import React from 'react'
import { SignUp } from '@/presentation/pages'
import { makeSignUpvalidation } from './signup-validation-factory'
import { makeLocalSaveAcessToken } from '@/main/factories/usecases/save-access-token/local-storage-adapter-factory'
import { makeAddRemoteAccount } from '../../usecases/add-account/remote-add-account'

export const makeSigUp: React.FC = () => {
  return (
    <SignUp
      validation={makeSignUpvalidation()}
      addAccount={makeAddRemoteAccount()}
      saveAccessToken={makeLocalSaveAcessToken()}
    />
  )
}
