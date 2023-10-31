import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film/");
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const data = await response.json();
      const transformData = data.results.map(result => ({
        id: result.episode_id,
        title: result.title,
        openingText: result.opening_crawl,
        releaseDate: result.release_date
      }));
      setMovies(transformData);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isloading && movies.length>0 && !error && <MoviesList />}
        {!isloading && movies.length===0  && !error && <p> Movies not found </p>}
        {isloading && <p>Loading...</p>
        }
        {!isloading && error &&
          <p>
            {error}
          </p>}
      </section>
    </React.Fragment>
  );
}

export default App;
