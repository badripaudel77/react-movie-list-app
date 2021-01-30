import React, { useState } from 'react'

import movie from "../api"
import MovieItem from './MovieItem'

const Search = () => {
    const [searchItem, setSearchItem] = useState('');
    const [movies, setMovies] = useState([])

      const onInputChange = async (event) => {
            console.log("movie is " + event.target.value)
            setSearchItem(event.target.value)
            const response = await movie.get(`/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchItem}`)
            console.log(response.data.results);
            setMovies(response.data.results)
      }
    
    return (
        <>
            <div className="text-lg p-5 flex justify-center items-center">
                <form>
                    <input type="text" name="searchItem" value = {searchItem} 
                        onChange={onInputChange} placeholder="search for movie"
                        className="outline-none rounded-full border-solid bg-gray-700 text-gray-400 p-2.5"
                    />
                </form>
            </div>
            <div className="flex flex-row flex-wrap">
                {
                    movies.length >0 && movies.map(movie => (
                        <MovieItem movie={movie} key={movie.id}/>
                    ))
                }
            </div>
        </>  
    )
}

export default Search