import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import styled from 'styled-components';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  const nextPageButton = styled(FaArrowAltCircleRight)`color: #fff;`;
  const lastPageButton = styled(FaArrowAltCircleLeft)`color: #fff;`;

  const getMovieRequest = async (searchValue, page) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&page=${page}&type=movie&apikey=ddacb17c`
    const response = await fetch(url)
    const responseJson = await response.json();

    if (responseJson.Search) {
      console.log(movies)
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue, page);
  }, [searchValue]);




  return (
    <div className='container-fluid movie-app'>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row2">
        <MovieList movies={movies} />
      </div>
      <nextPageButton />
    </div>

  )
}

export default App;

