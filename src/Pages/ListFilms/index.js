import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'


import { useFilms } from '../../Context/ListFilms'



function ListFilms() {

  const { films } = useFilms()



  return (
    <>
      {console.log(films)}

      {films && (


        films.map(film => (
          <div key={film.id} className='film-single'>
            <article >

              <img src={`${film.image}`} alt={film.name} />
              <div className='details'>
                <h1>{film.name}</h1>
                <h5> Sinopse</h5>
                <p>{film.description}</p>
                <Link to={`/Film/${film.id}`}>
                  <button>Mais Detalhes</button>
                </Link>
              </div>

            </article>
          </div>
        ))
      )
      }
    </>
  );
}

export default ListFilms;