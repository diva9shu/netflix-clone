import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * 20)]);
    }
    fetchData();
  }, []);

  // truncate text if too long
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {/* different api properties - select name from any */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button button_play">Play</button>
          <button className="banner_button button_mylist">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
      </div>

      <div className="banner_fade_bottom"></div>
    </header>
  );
}

export default Banner;
