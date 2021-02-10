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

  //remove from the watchlist
  const removeFromWatched = (movie) => {
    dispath({type : types.REMOVE_FROM_WATCHED, payload : movie.id})
  }

  //remove from the watchlist
  const removeFromWatchlist = (movie) => {
    dispath({type : types.REMOVE_FROM_WATCHLIST, payload : movie.id})
  }
    return (
        <MovieContext.Provider
          value={{
            watchlist : state.watchlist,
            watched : state.watched,

            addToWatchlist,
            addToWatched,
            removeFromWatched,
            removeFromWatchlist
          }}
        >
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieState