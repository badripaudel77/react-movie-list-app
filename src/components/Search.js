import React, { useState } from 'react'

const Search = ({onMovieSearch}) => {

    const [searchItem, setSearchItem] = useState('');

    const onInputChange = (event) => {
      setSearchItem(event.target.value)
      onMovieSearch(searchItem)
    }

    return (
        <div className="text-lg p-5 flex justify-center items-center">
            <form>
                <input type="text" name="searchItem" value = {searchItem} 
                onChange={onInputChange} placeholder="search for movie"
                className="outline-none rounded-full border-solid bg-gray-700 text-gray-400 p-2.5"
                />
            </form>
        </div>
    )
}

export default Search