import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spiner/spinner'
import Logo from '@/presentation/components/img/logo'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <Logo />
        <h1>Login</h1>
      </header>
      <form className={Styles.form}>
        <h2>LOGIN</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite o seu email" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite a sua senha" />
          <span className={Styles.status}>🔴</span>
        </div>
        <button type="submit" className={Styles.submit}>Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner}/>
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <footer className={Styles.footer}></footer>
    </div>
  )
}

export default Login
