import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import MovieContext from '../context/movies/movieContext'

export const Header = () => {

  const movieContext = useContext(MovieContext) 
  const { watched, watchlist } = movieContext 

    return (
            <div className="bg-gray-800 text-white p-2 
              flex flex-col justify-between items-center sm:flex-row">
               {/* left float */}
                <div className="flex items-center text-gray-400">
                    <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/play-256.png" 
                         width="40" alt="brand"/>
                        <Link to="/" className="hover:text-gray-500">My Movie</Link>
                </div>

                {/* right float */}
                <div className="text-gray-400">
                        <Link to="/watchlist" className="m-7 hover:text-gray-500">
                                Watchlist
                               <span className="m-3 bg-green-500 text-gray-300 rounded-full p-1">{watchlist && watchlist.length}</span>
                        </Link>
                        <Link to="/watched" className="m-7 hover:text-gray-500">
                                Watched
                               <span className="m-3 bg-green-500 text-gray-300 rounded-full p-1">{watched && watched.length}</span>
                                </Link>
                </div>
            </div>
    )
}
