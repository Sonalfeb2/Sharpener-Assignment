import "./NewMovieForm.css";
import { useState } from "react";
const NewMoviesForm = (props) => {
  const [newMovies, setNewMovies] = useState({});
  const showMovie = e => {
    e.preventDefault();
    console.log(newMovies);
    props.addMovie(newMovies);
  };
  return (
    <form onSubmit={showMovie}>
      <label>Title</label>
      <input
        type="text"
        placeholder="Title"
        onChange={e =>
          setNewMovies(prev => ({ ...prev, title: e.target.value }))}
        required
      />

      <label>Opening Text</label>
      <input
        type="textarea"
        placeholder="Opening Text"
        onChange={e =>
          setNewMovies(prev => ({ ...prev, openingText: e.target.value }))}
        required
      />
      <label>Release Date</label>
      <input
        type="date"
        placeholder="Release Date"
        onChange={e =>
          setNewMovies(prev => ({ ...prev, releaseDate: e.target.value }))}
        required
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );
};
export default NewMoviesForm;
