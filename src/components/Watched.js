import React, {useContext} from 'react'

import MovieContext from '../context/movies/movieContext'
import MovieItem from './MovieItem'

const Watched = () => {
 const movieContext = useContext(MovieContext) 
 const { watched } = movieContext   

    return (
        <div className="text-center">
        { watched.length === 0 && <div className="bg-red-300 p-10">No Movies are found in Watched list, Please add first.</div> }

            {
             watched.length >0 && watched.map(movie => (
                 <MovieItem movie={movie} />
              ))
            }
        </div>
    )
}

export default Watched