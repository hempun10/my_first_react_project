import React from "react";
import { useEffect } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import SearchIcon from "./search.svg";

// 7b225a20
const API_URL = "https://www.omdbapi.com?apikey=7b225a20";
const App = () => {
  const movie1 = {
    Title: "Avatar: The Last Airbender",
    Year: "2005–2008",
    imdbID: "tt0417299",
    Type: "series",
    Poster: "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg",
  };

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Avatar");
  }, []);

  return (
    <div className="app">
      <h1>MovieMandu</h1>

      <div className="search">
        <input
          placeholder="Search your fav movies !"
          value="SuperMan"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search-icon" onClick={() => {}} />
      </div>
      <div className="container">
       <MovieCard movie1={movie1}/>
      </div>
    </div>
  );
};

export default App;
