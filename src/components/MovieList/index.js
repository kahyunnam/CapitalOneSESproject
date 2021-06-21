import React from 'react';
import { Titles } from './MovieListElements.js';

const MovieList = (props) => {

  return (
    <>
      {
        props.movies.map((movie, index) => (
          <Titles>
            <h3> {movie.Title} </h3>
            <h1>{index}</h1>
            {/* <img src={movie.Poster} alt="Poster Not Found"></img> */}
          </Titles>
        ))
      }
    </>
  );
};

export default MovieList;