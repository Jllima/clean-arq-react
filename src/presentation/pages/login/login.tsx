import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { Context } from '@/presentation/contexts'
import { Input, Footer, LoginHeader, FormStatus } from '@/presentation/components'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>LOGIN</h2>
          <Input type="email" name="email" placeholder="Digite o seu email"/>
          <Input type="password" name="password" placeholder="Digite a sua senha"/>
          <button disabled data-testid='submit' type="submit" className={Styles.submit}>Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
