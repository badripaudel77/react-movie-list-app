import React, {useContext} from 'react'

import MovieContext from '../context/movies/movieContext'
import MovieItem from './MovieItem'

const Watched = () => {
 const movieContext = useContext(MovieContext) 
 const { watched } = movieContext   

    return (
        <div className="text-center">
            Watched movies
            {
             watched.length >0 && watched.map(movie => (
                 <MovieItem movie={movie} />
              ))
            }
        </div>
    )
}

export default Watched