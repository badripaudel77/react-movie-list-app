import React, {useContext} from 'react'

import MovieContext from '../context/movies/movieContext'
import WatchListMovieItem from './WatchlistMovieItem'

const Watchlist = () => {
 const movieContext = useContext(MovieContext) 
 const { watchlist } = movieContext   

    return (
        <div className="text-center flex flex-row flex-wrap">
            {watchlist.length === 0 && <div className="bg-red-300 p-10">No Movies are found in Watchlist, Please add first.</div> }
            {
             watchlist.length >0 && watchlist.map(movie => (
                 <WatchListMovieItem movie={movie} key={movie.id}/>
              ))
            }
        </div>
    )
}

export default Watchlist