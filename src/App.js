import React from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";

function App() {
  return (
    <div className="app">
      <Header />

      <Nav />

      <Results />
      {/* Results */}
    </div>
  );
}

export default App;

/*
API Key (v3 auth)
e6236ce86e794a8b57c80e3fd68044fc

Example API Request
https://api.themoviedb.org/3/movie/550?api_key=e6236ce86e794a8b57c80e3fd68044fc

API Read Access Token (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjIzNmNlODZlNzk0YThiNTdjODBlM2ZkNjgwNDRmYyIsInN1YiI6IjVmNGU0MjdhNDE0NjVjMDAzNWE3NjlkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._mONM2f0p8PODmuGfFgVIKNAH1iOHAmj9XdLYBUd4dU

*/
