import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Room from 'pages/Room'
import Main from 'pages/Main'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/room/:roomId'>
          <Room />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
