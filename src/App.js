import React from "react";
import { useEffect } from "react";
// 7b225a20
const API_URL = 'https://www.omdbapi.com?apikey=7b225a20'
const App=()=> {

  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search)
  }
  useEffect(()=>{
    searchMovies("Avatar")
  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;
