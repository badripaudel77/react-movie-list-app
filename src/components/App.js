//import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { Header } from "./Header";
import Search from './Search';
import Watched from './Watched';
import Watchlist from './Watchlist';

//import global state
import MovieState from '../context/movies/MovieState';

function App() {  
  return (
   <MovieState>
    <div className="items-center justify-center  bg-gray-100">
      <Router>
        <Header />
        <Switch>
             {/* <Route path="/" exact component={Search}/> */}
             {/* <Route exact path="/" render={(props) => (
                                            <Search onMovieSearch={onMovieSearch}>
                                            </Search>
                                       )} 
                                    /> */}
             <Route path="/" exact component = {Search} />                       
             <Route path="/watched" exact component={Watched}/>
             <Route path="/watchlist" exact component={Watchlist}/>
             <Redirect to="/" ></Redirect>
             {/* <Route path="*" component={NoMatchComponent} /> */}
        </Switch>
      </Router>   
    </div>
    </MovieState> 
  );
}

export default App;
