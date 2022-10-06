import { useState } from "react";
import "./App.css";

const MovieForm = (props) => {
  // setting all the useState hooks to empty strings and 0s
  // this is so that the form is empty when the page loads
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [actor, setActor] = useState("");
  const [plot, setPlot] = useState("");
  const [imbd, setImbd] = useState(0);
  const [year, setYear] = useState(0);
  console.log(title);
  // this is the function that is called when the form is submitted
  //using all of the set functions to set the state of the variables when the input is changed (onChange)event={e => setTitle(e.target.value)}
  return (
    <div>
      <label>Title: </label>
      <input
        type='text'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <label>Director: </label>
      <input
        type='text'
        onChange={(e) => {
          setDirector(e.target.value);
        }}
      />
      <br />
      <label>Actor: </label>
      <input
        type='text'
        onChange={(e) => {
          setActor(e.target.value);
        }}
      />
      <br />
      <label>Plot: </label>
      <input
        type='text'
        onChange={(e) => {
          setPlot(e.target.value);
        }}
      />
      <br />
      <label>Imdb Rating: </label>
      <input
        type='number'
        step='0.1'
        onChange={(e) => {
          setImbd(e.target.value);
        }}
      />
      <br />
      <label>Year: </label>
      <input
        type='number'
        onChange={(e) => {
          setYear(e.target.value);
        }}
      />

      <p>Current Title: {title}</p>
      <p>Current Director: {director}</p>
      <p>Current Actor: {actor}</p>
      <p>Current Plot: {plot}</p>
      <p>Current Imbd Rating: {imbd}</p>
      <p>Current Year: {year}</p>
    </div>
  );
};

function App() {
  const [movieList, setMovieList] = useState([]);
  const handleAddMovie = (newMovie) => {};
  return (
    <div className='App'>
      <h1>Movie Form</h1>
      <header className='App-header'>
        <MovieForm />
      </header>
    </div>
  );
}

export default App;
