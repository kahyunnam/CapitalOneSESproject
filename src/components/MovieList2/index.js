import React, { useState, useEffect } from 'react';
import { Titles, MovieInfo, MovieInfoWrapper, Info, Poster, TitleSpacer } from './MovieListElements.js';
import './MovieList.css';

const MovieList2 = (props) => {

  const data = props.movies


  const getMovieInfo = async (id) => {
    const url = `https://www.omdbapi.com/?i=${id}&type=movie&apikey=ac3cc48a`
    const response = await fetch(url)
    const responseJson = await response.json();

    return (
      <>
      </>
    )
  }

  const MovieListItem = (movie) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      console.log(!isOpen)
      setIsOpen(!isOpen)
    }

    return (
      <Titles>
        <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{movie.Title}</h3>
        <MovieInfo isOpen={isOpen} >
          <MovieInfoWrapper onClick={toggle} >
            <Poster>
              <img class="Poster" src={movie.Poster} alt="Movie Poster Unavailable"></img>
            </Poster>
            <Info>
              <h3> ImdbID: {movie.imdbID} </h3>
              <h3> Released: {movie.Year} </h3>
            </Info>
          </MovieInfoWrapper>
        </MovieInfo>
      </Titles>
    )
  }

  const MovieListItemMap = (props) => {

    // const count = (number) => {
    //   return (
    //     <h1> number: {number} </h1>
    //   )
    // }
    // return (
    //   props.movies.map(count)
    // )
    console.log(props.movies)

    return (
      props.movies.map(MovieListItem)
    )
  }



  if (props.arrowsNeeded) {
    return (
      <>
        <MovieListItemMap movies={data} />
      </>
    )
  }
  else {
    return (
      <div>

      </div>
    )
  }


}

export default MovieList2;