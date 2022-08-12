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
  //     Promise.all([
  //       Fetcher.GET("https://ejmdev-idlescape.herokuapp.com/game"),
  //       Fetcher.GET("urlhere"),
  //       Fetcher.GET("urlhere"),
  //       Fetcher.GET("urlhere"),
  //       Fetcher.GET("urlhere"),
  //       Fetcher.GET("urlhere"),
  //       Fetcher.GET("urlhere"),
  //     ]).catch((err) => {
  //       console.log(`There was a problem fetching projects`);
  //       console.error(err);
  //     });
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
