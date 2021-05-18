import React, {useContext} from 'react'

import MovieContext from '../context/movies/movieContext'
import WatchedMovieItem from './WatchedMovieItem'

const Watched = () => {
 const movieContext = useContext(MovieContext) 
 const { watched } = movieContext   

    return (
        <div className="text-center flex flex-row flex-wrap">
        { watched.length === 0 && <div className="bg-red-300 p-10">No Movies are found in Watched list, Please add first.</div> }

            {
             watched.length >0 && watched.map(movie => (
                 <WatchedMovieItem movie={movie} key={movie.id} />
              ))
            }
        </div>
    )
}

export default Watched