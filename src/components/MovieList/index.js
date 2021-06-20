import React from 'react';
import './MovieListStyle.css';

const MovieList = (props) => {

  return (
    <>
      {
        props.movies.map((movie, index) => (
          <div className={index}>
            <h3> {movie.Title} </h3>
            <h1>{index}</h1>
            {/* <img src={movie.Poster} alt="Poster Not Found"></img> */}
          </div>
        ))
      }
    </>
  );
};

export default MovieList;