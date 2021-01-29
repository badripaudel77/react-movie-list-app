//import './App.css';
import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import movie from "../api"
import { Header } from "./Header";
import MovieItem from './MovieItem';
import Search from './Search';
import Watched from './Watched';
import Watchlist from './Watchlist';

function App() {
  const [movies, setMovies] = useState([])

  const onMovieSearch = async (movieItem) => {
    console.log("movie is " + movieItem);
    const response = await movie.get(`/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movieItem}`)
    console.log(response.data.results);
    setMovies(response.data.results)

  }

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <Router>
        <Header />
        <Switch>
             {/* <Route path="/" exact component={Search}/> */}
             <Route exact path="/" render={(props) => (
                                            <Search onMovieSearch={onMovieSearch} />
                                       )} 
                                    />

             <Route path="/watched" exact component={Watched}/>
             <Route path="/watchlist" exact component={Watchlist}/>
             <Redirect to="/" ></Redirect>
             {/* <Route path="*" component={NoMatchComponent} /> */}
        </Switch>
      </Router>
       <div className="flex flex-row flex-wrap">
        {
            movies && movies.map(movie => (
              <MovieItem movie={movie} key={movie.id}/>
            ))
          }
       </div>

    </div>
  );
}

export default App;
