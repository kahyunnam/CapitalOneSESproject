import React, { useState, useEffect } from 'react';
import { Titles, MovieInfo, MovieInfoWrapper, Info, Poster, TitleSpacer } from './MovieListElements.js';
import './MovieList.css';

const MovieList = (props) => {

  const [isOpen, setIsOpen] = useState(false)


  const toggle = () => {
    console.log(!isOpen)
    setIsOpen(!isOpen)
  }

  const movie1 = Object.values(props.movies)[0]
  const length = Object.keys(props.movies).length
  console.log(Object.keys(props.movies).length)


  // console.log(Object.values(props.movies)[0].Title)


  const getMovieInfo = async (id) => {
    const url = `https://www.omdbapi.com/?i=${id}&type=movie&apikey=ac3cc48a`
    const response = await fetch(url)
    const responseJson = await response.json();
    return (
      <>
      </>
    )
  }


  if (props.arrowsNeeded) {
    if (length == 10) {
      return (
        <div>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[0].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[0].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[0].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[0].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[1].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[1].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[1].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[1].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[2].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[2].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[2].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[2].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[3].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[3].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[3].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[3].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[4].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[4].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[4].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[4].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[5].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[5].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[5].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[5].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[5].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[5].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[6].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[6].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[7].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[7].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[7].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[7].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[8].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[8].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[8].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[8].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[9].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[9].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[9].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[9].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
        </div>

      )
    }
    if (length == 9) {
      return (
        <div>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[0].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[0].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[0].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[0].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[1].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[1].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[1].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[1].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[2].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[2].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[2].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[2].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[3].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[3].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[3].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[3].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[4].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[4].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[4].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[4].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[5].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[5].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[5].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[5].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[6].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[6].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[6].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[6].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[7].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[7].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[7].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[7].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[8].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[8].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[8].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[8].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
        </div>
      )
    }
    if (length == 8) {
      return (
        <div>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[0].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[0].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[0].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[0].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[1].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[1].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[1].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[1].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[2].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[2].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[2].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[2].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[3].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[3].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[3].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[3].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[4].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[4].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[4].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[4].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[5].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[5].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[5].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[5].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[6].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[6].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[6].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[6].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[7].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[7].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[7].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[7].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
        </div>
      )
    }
    if (length == 7) {
      return (
        <div>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[0].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[0].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[0].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[0].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[1].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[1].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[1].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[1].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[2].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[2].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[2].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[2].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[3].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[3].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[3].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[3].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[4].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[4].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[4].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[4].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[5].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[5].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[5].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[5].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[6].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[6].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[6].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[6].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
        </div>
      )
    }
    if (length == 6) {
      return (
        <div>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[0].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[0].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[0].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[0].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[1].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[1].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[1].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[1].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[2].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[2].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[2].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[2].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[3].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[3].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[3].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[3].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[4].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[4].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[4].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[4].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[5].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[5].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[5].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[5].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
        </div>
      )
    }
    if (length == 5) {
      return (
        <div>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[0].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[0].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[0].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[0].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[1].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[1].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[1].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[1].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[2].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[2].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[2].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[2].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[3].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[3].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[3].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[3].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[4].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[4].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[4].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[4].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
        </div>
      )
    }
    if (length == 4) {
      return (
        <div>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[0].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[0].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[0].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[0].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[1].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[1].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[1].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[1].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[2].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[2].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[2].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[2].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[3].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[3].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[3].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[3].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
        </div>
      )
    }
    if (length == 3) {
      return (
        <div>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[0].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[0].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[0].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[0].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[1].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[1].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[1].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[1].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[2].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[2].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[2].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[2].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
        </div>
      )
    }
    if (length == 2) {
      return (
        <div>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[0].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[0].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[0].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[0].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[1].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[1].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[1].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[1].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
        </div>
      )
    }
    if (length == 1) {
      return (
        <div>
          <Titles>
            <h3 class="TitleText" isOpen={isOpen} onClick={toggle} >{Object.values(props.movies)[0].Title}</h3>
            <MovieInfo isOpen={isOpen} >
              <MovieInfoWrapper onClick={toggle} >
                <Poster>
                  <img class="Poster" src={Object.values(props.movies)[0].Poster} alt="Movie Poster Unavailable"></img>
                </Poster>
                <Info>
                  <h3> ImdbID: {Object.values(props.movies)[0].imdbID} </h3>
                  <h3> Released: {Object.values(props.movies)[0].Year} </h3>
                </Info>
              </MovieInfoWrapper>
            </MovieInfo>
          </Titles>
        </div>
      )
    }
    else {
      return null
    }
  }
  else {
    return null
  }
}

export default MovieList;