import React, { useReducer, useEffect} from 'react'

import MovieContext from './movieContext'
import { movieReducer } from './movieReducer'
import { types } from './types'

const initialState = {
  watchlist : localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
  watched : localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
}

const MovieState = (props) => {
  const [state, dispath] = useReducer(movieReducer, initialState);

  //update state as soon as item is selected and added to localstorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
    localStorage.setItem("watched", JSON.stringify(state.watched))  
  }, [state])

  //add to watchlist
  const addToWatchlist = (movie) => {
      dispath({type : types.ADD_TO_WATCHLIST , payload : movie})
  }

  //add to watched
  const addToWatched = (movie) => {
    dispath({type : types.ADD_TO_WATCHED , payload : movie})
}
    return (
        <MovieContext.Provider
          value={{
            watchlist : state.watchlist,
            watched : state.watched,

            addToWatchlist,
            addToWatched,
          }}
        >
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieState