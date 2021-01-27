//import './App.css';
import movie from "../api"
import { API_KEY } from "../api/secret";
import {useEffect } from 'react'
import { Header } from "./Header";

function App() {

  useEffect(() => { 
    const fetchMovies = async () => {
         const movies = await movie.get(`/550?api_key=${API_KEY}`)
         console.log(movies.data)
    }
      fetchMovies()
  }, [])

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
