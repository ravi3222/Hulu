import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import requests from "./requests";

function Results() {
  // eslint-disable-next-line
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // run this code once when the Results component loads/ mounts
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      console.log(request);
      //   setMovies(request.data.results);
      //   return request;
    }
    fetchData();
  }, []);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard />
      ))}
    </div>
  );
}

export default Results;
