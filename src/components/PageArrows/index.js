import React from 'react';
import { Arrows, RightArrow, LeftArrow } from './PageArrowsElement';

const PageArrows = ({ arrowsNeeded, getMovieRequest, searchValue, page, setPage }) => {

  if (arrowsNeeded) {
    const nextPage = () => {
      var next = page + 1
      setPage(next)
      getMovieRequest(searchValue, page + 1)
    }

    const lastPage = () => {
      if (page > 1) {
        var next = page - 1
        setPage(next)
        getMovieRequest(searchValue, page - 1)
      }
    }


    return (
      <Arrows>
        <LeftArrow onClick={() => lastPage()} />
        <RightArrow onClick={() => nextPage()} />
      </Arrows>
    )
  }
  return null
}

export default PageArrows;