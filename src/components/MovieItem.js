import React, {useContext} from 'react'
import { BASE_IMAGE_URL } from '../api/secret'

import MovieContext from '../context/movies/movieContext'

const MovieItem = ({movie}) => {

    const movieContext = useContext(MovieContext)    
    const {addToWatchlist, addToWatched} = movieContext

return (
    <div className="p-4 hover:bg-gray-300">  
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src ={BASE_IMAGE_URL  && BASE_IMAGE_URL + movie.backdrop_path}  alt={movie.original_title}/>
                <div className="px-1 py-2">
                    <div className="font-bold text-xl mb-1">{movie.original_title}</div>
                </div>
                <p className="text-gray-700 p-1">{movie.overview.length>100 ? movie.overview.substr(0, 49) + "..." : movie.overview}</p>
                <div className="px-6 pt-4 pb-2">
                    <span className="bg-gray-200 cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-pink-300"
                          onClick={() => addToWatchlist(movie)}   
                    >
                        Add To Watchlist</span>
                    <span className="bg-gray-200 cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-pink-300"
                          onClick={() =>addToWatched(movie)}
                    >
                        Add To Watched</span>
                    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#movie</span> */}
                </div>
            </div>
    </div>
    )}

export default MovieItem
