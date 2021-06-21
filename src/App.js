import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import PageArrows from './components/PageArrows';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [arrowsNeeded, setArrowsNeeded] = useState(false);

  const needArrows = () => {
    setArrowsNeeded(true)
  }



  const getMovieRequest = async (searchValue, page) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&page=${page}&type=movie&apikey=ac3cc48a`
    const response = await fetch(url)
    const responseJson = await response.json();

    if (responseJson.Search) {
      // console.log(movies)
      setMovies(responseJson.Search)
      needArrows()
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue, page);
  }, [searchValue]);




  return (
    <div className='container-fluid movie-app'>
      <div className="heading">
        <MovieListHeading class="heading" heading="Search for a Movie." />
        <SearchBox ckass="heading" searchValue={searchValue} setSearchValue={setSearchValue} setPage={setPage} />
      </div>
      <div className="">
        <MovieList movies={movies} arrowsNeeded={arrowsNeeded} />
      </div>
      <div>
        <PageArrows arrowsNeeded={arrowsNeeded} getMovieRequest={getMovieRequest} searchValue={searchValue} page={page} setPage={setPage} />
      </div>
    </div>

  )
}

export default App;

