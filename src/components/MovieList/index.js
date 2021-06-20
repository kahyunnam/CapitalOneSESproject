import React from 'react';
import './MovieListStyle.css';

const MovieList = (props) => {
  return (
    <>
      {/* {props.movies.forEach((movie, i) => (
        <div className="poster d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))
      } */}
      {props.movies.map((movie, index) => (
        <div className="poster d-flex justify-content-start m-3">
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt="Poster Not Found"></img>
        </div>
      ))
      }
    </>
  );
};

export default MovieList;