import "./NewMovieForm.css";
import { useState } from "react";
const NewMoviesForm = () => {
  const [newMovies, setNewMovies] = useState({});
  const showMovie = (e) =>{
    e.preventDefault();
    console.log('hi')
    console.log(newMovies)
  }
  return (
    <div>
      <label for="title">Title</label>
      <input
        type="text"
        placeholder="Title"
        onChange={e =>
          setNewMovies(prev => ({ ...prev, title: e.target.value }))}
      />

      <label for="lname">Opening Text</label>
      <input
        type="textarea"
        placeholder="Opening Text"
        onChange={e =>
          setNewMovies(prev => ({ ...prev, openingText: e.target.value }))}
      />
      <label for="lname">Release Date</label>
      <input
        type="date"
        placeholder="Release Date"
        onChange={e =>
          setNewMovies(prev => ({ ...prev, releaseDate: e.target.value }))}
      />
      <button onClick = {showMovie}>Submit</button>
    </div>
  );
};
export default NewMoviesForm;
