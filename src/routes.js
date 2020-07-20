import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ListFilms from './Pages/ListFilms'
import Header from './Components/Header'

const Routes = () => {
  return (

    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={ListFilms} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes