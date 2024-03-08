import React, { useEffect, useState } from "react";
import instance from "../../api/Api";
import endPoint from "../../api/endPoint";
import style from "./Banner.module.scss";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const baseURL = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(endPoint.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      return request;
    };
    fetchData();
  }, []);
  const truncate = (str, n) => {
    if (typeof str !== "string") {
      return ""; // or any other default value you prefer
    }
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className={style.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
      }}
    >
      <div className={style.banner_contents}>
        <h1 className={style.banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={style.banner_buttons}>
          <button className={style.banner_button}>play</button>
          <button className={style.banner_button}>My List</button>
        </div>
        <h1 className={style.banner_description}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className={style.banner_fadeBottom}></div>
    </header>
  );
};

export default Banner;
