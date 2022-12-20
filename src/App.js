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
  // Seeting Up Dynamic Search State 
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); //Feeting response from api and Storing as variable
    const data = await response.json();
    setMovies(data.Search) //Assigning received movies in data variable and passing dyanamic values tosetMovie state
  };
  useEffect(() => {
    searchMovies("Avatar"); //Show the movies on reload or as first deafult home
  }, []);

  return (
    <div className="app">
      <h1>MovieMandu</h1>

      <div className="search">
        <input
          placeholder="Search your fav movies !"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value) } //Getting input from user and passing value to search state
          onKeyUp={(e)=>e.key==="Enter"?searchMovies(searchTerm):null} //Searching movies while pressign enter key
        />
        <img src={SearchIcon} alt="search-icon"  onClick={() => searchMovies(searchTerm)} //Searching movies while search key is clicked
         />
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
