import React, { useEffect, useState } from "react";
import instance from "../api/Api";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchEndpoint, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseURL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(fetchEndpoint);
        console.log(response.data.results);
        setMovies(response.data.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [fetchEndpoint]);

  const handleOnClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // Preferably use movie.title and movie.release_date if available
      const searchTerm = movie?.title || movie?.name || ""; // Adjusted for title or name
      movieTrailer(searchTerm)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.error("Error finding movie trailer:", error);
        });
    }
  };

  // Corrected playerVars in opts
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1, // Corrected to autoplay and lowercase
    },
  };

  return (
    <div className="row">
      <h2 style={{ padding: "10px" }}>{title}</h2>
      <div className="row_posters">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <img
              className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`} // Adjusted class name for consistency
              key={movie.id}
              onClick={() => handleOnClick(movie)}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title} // Handle both name or title
            />
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
