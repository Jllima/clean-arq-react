import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/routes'
import '@/presentation/styles/global.scss'
import { makeLogin } from './factories/pages/login/login-factory'
import { makeSigUp } from './factories/pages/signup/signup-factory'

ReactDOM.render(
  <Router makeLogin={makeLogin} makeSigUp={makeSigUp}/>,
  document.getElementById('main')
)
