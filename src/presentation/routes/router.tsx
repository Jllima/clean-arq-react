import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Props = {
  makeLogin: React.FC
  makeSigUp: React.FC
}

const Router: React.FC<Props> = ({ makeLogin, makeSigUp }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={makeLogin} />
        <Route path='/signup' exact component={makeSigUp}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
