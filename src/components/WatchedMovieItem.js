import React, {useContext} from 'react'
import { BASE_IMAGE_URL } from '../api/secret'

import { Link } from 'react-router-dom'

import MovieContext from '../context/movies/movieContext'

const MovieItem = ({movie}) => {

    const movieContext = useContext(MovieContext)    
    const { removeFromWatched } = movieContext

return (
    <div className="p-4 hover:bg-gray-300">  
        <Link to={`/movie/${movie.id}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src ={BASE_IMAGE_URL  && BASE_IMAGE_URL + movie.backdrop_path}  alt={movie.original_title}/>
                <div className="px-1 py-2">
                    <div className="font-bold text-xl mb-1">{movie.original_title}</div>
                </div>
                <p className="text-gray-700 p-1">{movie?.overview?.length>100 ? movie.overview.substr(0, 49) + "..." : movie.overview}</p>
                <div className="px-6 pt-4 pb-2">
                    <button className="outline-none bg-blue-600 cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-green-200 mr-2 mb-2 hover:bg-blue-500"
                           onClick={() => removeFromWatched(movie)}
                          >
                              Remove From Watched 
                    </button>
                </div>
            </div>
            </Link>
    </div>
    )}

export default MovieItem
