import React, {useContext} from 'react'

import MovieContext from '../context/movies/movieContext'
import MovieItem from './MovieItem'

const Watchlist = () => {
 const movieContext = useContext(MovieContext) 
 const { watchlist } = movieContext   

    return (
        <div className="text-center">
            watchliist
            {
             watchlist.length >0 && watchlist.map(movie => (
                 <MovieItem movie={movie} />
              ))
            }
        </div>
    )
}

export default Watchlist