import React, { useState, useEffect, useContext, createContext } from 'react';



const ListFilmsContext = createContext()


function FilmsProvider({ children }) {

  const [films, setFilms] = useState()


  useEffect(() => {

    const url = 'https://my-json-server.typicode.com/Matheus0liveira/fake-API/films'
    fetch(url)
      .then(response => response.json())
      .then(json => setFilms(json))

  }, [])

  return (

    <ListFilmsContext.Provider value={{ films, setFilms }}>

      {children}

    </ListFilmsContext.Provider>

  );
}

export function useFilms() {

  const context = useContext(ListFilmsContext)
  if (!context) throw new Error('useFilms must be used within a ListFilmsProvider')

  const { films, setFilms } = context
  return { films, setFilms }
}

export default FilmsProvider;