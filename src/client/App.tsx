import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Fetcher from "./ClientUtils/Fetcher";
import MainPage from "./Pages/MainPage";
import BlogsLab from "./Pages/ProjectPages/BlogsLab";
import GundamPlanet from "./Pages/ProjectPages/GundamPlanet";
import IdleGame from "./Pages/ProjectPages/IdleGame";
import JustMyType from "./Pages/ProjectPages/JustMyType";
import StudioGhibli from "./Pages/ProjectPages/StudioGhibli";
import TicTacToe from "./Pages/ProjectPages/TicTacToe";

const App = (props: AppProps) => {
  //   useEffect(() => {
  //     // define the projectArray, an array containing
  //     const projectArray = [
  //       Fetcher.GET("https://ejmdev-idlescape.herokuapp.com/"),
  //       Fetcher.GET("https://eric-studio-ghibli-api.herokuapp.com/"),
  //       Fetcher.GET("https://ejmdev-tic-tac-toe.herokuapp.com/"),
  //       Fetcher.GET("https://eric-just-my-type.herokuapp.com/"),
  //     ];

  //     Promise.allSettled(projectArray)
  //       .then((res) => Promise.allSettled(res.map((r) => (r.status === "fulfilled" ? r.value.json() : Promise.reject(`Bad response from ${r.reason}`)))))
  //       .then((results) => {
  //         const sitesFailed = results.filter((res) => res.status === "rejected");
  //         const sitesLoaded = results.filter((res) => res.status === "fulfilled");

  //         console.log({ sitesFailed, sitesLoaded });
  //       })
  //       .catch(console.error);
  //   }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/idlegame" element={<IdleGame />} />
      <Route path="/studioghibli" element={<StudioGhibli />} />
      <Route path="/tictactoe" element={<TicTacToe />} />
      <Route path="/justmytype" element={<JustMyType />} />
      <Route path="/gundamplanet" element={<GundamPlanet />} />
      <Route path="/blogslab" element={<BlogsLab />} />
    </Routes>
  );
};

interface AppProps {}

export default App;
