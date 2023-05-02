import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)


  // const fetchMoviesHandler = () => {
  //   fetch('https://swapi.dev/api/films/').then(response => { 
  //     return response.json()
  //   }).then(data => {
  //     const objMovies = data.results.map(el => {
  //       return {id: el.episode_id, title: el.title, openingText: el.opening_crawl, releaseDate: el.release_date}
  //     })
  //     setMovies(objMovies)

  //   })
  // }

  const fetchMoviesHandler = async () => {
    setMovies([]);
    setLoading(true)
    const data = await fetch('https://swapi.dev/api/films/')
    const json = await data.json();
    const objMovies = json.results.map(el => {
            return {id: el.episode_id, title: el.title, openingText: el.opening_crawl, releaseDate: el.release_date}
          })
          setMovies(objMovies)
          setLoading(false)
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        {
          loading && <small>Loading...</small>
        }
      </section>
      {
        (movies.length !== 0 && !loading) && <section> {
          (!loading)? <MoviesList movies={movies} /> : <h1>Loading!</h1> 
        }</section>
      }
    </>
  );
}

export default App;
