import React from 'react';
import Routes from './routes'
import FilmsProvider from './Context/ListFilms'

import './App.css'
function App() {
  return (

    <FilmsProvider>

      <Routes />

    </FilmsProvider>
  )
}

export default App;
