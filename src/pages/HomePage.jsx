import React from "react";
import style from "./homePage.module.scss";

import Row from "../components/Row";
import endPoint from "../api/endPoint";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav";

const HomePage = () => {
  return (
    <div className={style.HomePage}>
      {" "}
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchEndpoint={endPoint.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Tranding Now" fetchEndpoint={endPoint.fetchTranding} />
      <Row title="Top Reaed" fetchEndpoint={endPoint.fetchTopRated} />
      <Row title="Action Movies" fetchEndpoint={endPoint.fetchActionMovies} />
      <Row title="Comedy Movies" fetchEndpoint={endPoint.fetchComedyMovies} />
      <Row title="Horror MOvies" fetchEndpoint={endPoint.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchEndpoint={endPoint.fetchRomanceMovies} />
      <Row title="Documentaries" fetchEndpoint={endPoint.fetchDocumentaries} />
    </div>
  );
};

export default HomePage;
