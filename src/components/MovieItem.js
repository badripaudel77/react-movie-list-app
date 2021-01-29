import React from 'react'
import { BASE_IMAGE_URL } from '../api/secret'

const MovieItem = ({movie}) => {
    return (
    <div className="p-4 hover:bg-gray-200">  
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src ={BASE_IMAGE_URL +  movie.backdrop_path}  alt={movie.original_title}/>
                <div className="px-3 py-2">
                    <div className="font-bold text-xl mb-1">{movie.original_title}</div>
                </div>
                <p class="text-gray-700">{movie.overview.length>100 ? movie.overview.substr(0, 49) + "..." : movie.overview}</p>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#movie</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reactjs</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#movie_database</span>
                </div>
            </div>
        </div>
    )}

export default MovieItem
