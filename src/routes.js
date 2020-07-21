import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Components/Header'
import NotFound from './Components/NotFound'
import ListFilms from './Pages/ListFilms'
import Film from './Pages/Film'

const Routes = () => {
  return (

    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={ListFilms} />
        <Route exact path='/Film/:id' component={Film} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes