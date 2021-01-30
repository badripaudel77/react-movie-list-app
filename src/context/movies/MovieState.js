import React, {useReducer, createContext, useEffect} from 'react'

import MovieContext from './movieContext'
import { movieReducer } from './movieReducer'
import { types } from './types'

const initialState = {
  watchlist : [],
  watched : [],
}

const MovieState = (props) => {
  const [state, dispath] = useReducer(movieReducer, initialState);

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