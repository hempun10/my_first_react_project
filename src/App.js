import React from "react";
import { useEffect,useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import SearchIcon from "./search.svg";

// 7b225a20
const API_URL = "https://www.omdbapi.com?apikey=7b225a20";


const App = () => {
  //Getting movies from API
  const [movies,setMovies] = useState([]);


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
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

     { movies?.length > 0 
      ? ( <div className="container">
      {/* Selecting Movies element using map function  */}
          {movies.map((movie) => (  
            /* Adding props to MovieCard  */
          <MovieCard movie ={movie}/>
         ))}
      </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
