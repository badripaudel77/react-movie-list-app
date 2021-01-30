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

        default:
            return state;
    }
}