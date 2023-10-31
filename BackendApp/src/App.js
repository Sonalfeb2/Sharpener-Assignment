import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  async function fetchHandler() {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    const transformData = data.results.map(result => ({
      id: result.episode_id,
      title: result.title,
      openingText: result.opening_crawl,
      releaseDate: result.release_date
    }));
    setMovies(transformData);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>
      <section>
        {loading ? <p>Loading...</p> : <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
