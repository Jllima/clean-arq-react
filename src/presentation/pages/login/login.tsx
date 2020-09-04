import React from 'react'
import Styles from './login-styles.scss'
import FormStatus from '@/presentation/components/form/form-status'
import LoginHeader from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'
import Input from '@/presentation/components/input/input'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form}>
        <h2>LOGIN</h2>
        <Input type="email" name="email" placeholder="Digite o seu email"/>
        <Input type="password" name="password" placeholder="Digite a sua senha"/>
        <button type="submit" className={Styles.submit}>Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
