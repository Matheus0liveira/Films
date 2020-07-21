import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Loading from '../../Components/Loading'



function Film({ match }) {
  const [film, setFilm] = useState(null)


  useEffect(() => {
    const { id } = match.params
    const url = `https://my-json-server.typicode.com/Matheus0liveira/fake-api/films/${id}`
    fetch(url)
      .then(response => response.json())
      .then(json => setFilm(json))

  }, [match.params])

  return (
    <>


      {film === null ? (<Loading />) : (


        <div className='film-single'>
          <article >
            <img src={`${film.image}`} alt={film.name} />

            <div className='details'>
              <h1>{film.name}</h1>
              <h5>Sinopse</h5>
              <p>{film.description}</p>
              <Link to='/'>
                <button style={{ background: 'none', border: '1px solid #e27e7e', color: '#e27e7e' }}>Voltar</button>
              </Link>
            </div>


          </article>
        </div>

      )}




    </>
  );
}

export default Film;