import React, { useState, useEffect } from 'react';
import { Titles, MovieInfo, MovieInfoWrapper, Info, Poster, TitleSpacer } from './MovieListElements.js';
import './MovieList.css';

const MovieList2 = (props) => {

  const data = props.movies


  const GetMovieInfo = (movie) => {
    console.log(movie)

    const [movieInfo, setMovieInfo] = useState({})

    const getInfo = async (movie) => {
      const url = `https://www.omdbapi.com/?t=${movie.movie}&type=movie&apikey=ac3cc48a`
      console.log(url)
      const response = fetch(url).then(response => response.json())
        .then(json => {
          setMovieInfo(json)
          console.log(movieInfo)
        })
    }

    getInfo(movie)

    return (
      <>
        <h4 class="R"><span>Released : </span> {movieInfo.Released} </h4>
        <h4 class="R"><span>Runtime :  </span> {movieInfo.Runtime}</h4>
        <h4 class="Rating"><span>Rating : </span> {movieInfo.imdbRating} / 10</h4>
        <h4 class="Genre"> {movieInfo.Genre}</h4>
        <h4 class="Plot">{movieInfo.Plot}</h4>
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
              <GetMovieInfo movie={movie.Title} class="movieInfo" />
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