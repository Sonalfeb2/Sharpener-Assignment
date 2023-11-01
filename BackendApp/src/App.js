import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import NewMoviesForm from "./components/NewMovieForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-65919-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const data = await response.json();
      const loadedData = [];
      for (var key in data) {
        loadedData.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        });
      }
      setMovies(loadedData);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);
  useEffect(
    () => {
      fetchHandler();
    },
    [fetchHandler]
  );
  const addMovie = async newmovie => {
    const response = await fetch(
      "https://react-http-65919-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(newmovie),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    console.log(data);
    fetchHandler();
  };
  const deleteHandler = async id => {
    try {
      const response = await fetch(
        `https://react-http-65919-default-rtdb.firebaseio.com/movies/${id}.json`,
        {
          method: "DELETE"
        }
      );
      if (!response.ok) {
        throw new Error(response);
      }
      fetchHandler();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <section>
        <NewMoviesForm addMovie={addMovie} />
      </section>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isloading &&
          movies.length > 0 &&
          !error &&
          <MoviesList movies={movies} deleteHandler={deleteHandler} />}
        {!isloading &&
          movies.length === 0 &&
          !error &&
          <p> Movies not found </p>}
        {isloading && <p>Loading...</p>}
        {!isloading &&
          error &&
          <p>
            {error}
          </p>}
      </section>
    </React.Fragment>
  );
}

export default App;
