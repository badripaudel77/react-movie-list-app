import {types } from './types'

export const movieReducer = (state, action ) => {

    switch (action.type) {
        case types.ADD_TO_WATCHLIST:
            //add to watchlist
            return {
                  ...state,
                  watchlist : [...state.watchlist, action.payload],
            }
    
        case types.ADD_TO_WATCHED:
                //add to watched
                return {
                       ...state,
                       watched : [...state.watched, action.payload],
                }
        
        case types.REMOVE_FROM_WATCHED : 
                //remove from the watched
                return {
                    ...state, 
                    watched : state.watched.filter(movie => movie.id !== action.payload)
                }

        case types.REMOVE_FROM_WATCHLIST : 
                //remove from the watchlist
                return {
                    ...state, 
                    watchlist : state.watchlist.filter(movie => movie.id !== action.payload)
                }
        default:
            return state;
    }
}