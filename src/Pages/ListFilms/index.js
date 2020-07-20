import React from 'react';
import './style.css'


import { useFilms } from '../../Context/Films'



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
                <button>Mais Detalhes</button>
              </div>

            </article>
          </div>
        ))
      )}
    </>
  );
}

export default ListFilms;