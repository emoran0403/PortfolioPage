import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Fetcher from "./ClientUtils/Fetcher";
import MainPage from "./Pages/MainPage";
import BlogsLab from "./Pages/ProjectPages/BlogsLab";
import GundamGetter from "./Pages/ProjectPages/GundamGetter";
import IdleGame from "./Pages/ProjectPages/IdleGame";
import JustMyType from "./Pages/ProjectPages/JustMyType";
import Navbar from "./Pages/ProjectPages/Nabar";
import StudioGhibli from "./Pages/ProjectPages/StudioGhibli";
import TicTacToe from "./Pages/ProjectPages/TicTacToe";
import Resume from "./Pages/Resume";

const App = (props: AppProps) => {
  // when the app loads, make a fetch request to each project to wake them up
  //! would this be better as a fetch to an endpoint that does this work?
  // i don't really need the response or the console logs, just making the request is enough
  useEffect(() => {
    // define the projectArray, an array containing
    const projectArray = [
      Fetcher.GET("https://ejmdev-idlescape.herokuapp.com/"),
      Fetcher.GET("https://ejmdev-tic-tac-toe.herokuapp.com/"),
      Fetcher.GET("https://eric-studio-ghibli-api.herokuapp.com/"),
      Fetcher.GET("https://eric-just-my-type.herokuapp.com/"),
    ];

    Promise.allSettled(projectArray)
      .then((res) =>
        Promise.allSettled(
          res.map((r) => (r.status === "fulfilled" ? r.value.json() : Promise.reject(`Bad response from ${r.reason}`)))
        )
      )
      .then((results) => {
        const sitesFailed = results.filter((res) => res.status === "rejected");
        const sitesLoaded = results.filter((res) => res.status === "fulfilled");

        console.log({ sitesFailed, sitesLoaded });
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/idlegame" element={<IdleGame />} />
        <Route path="/studioghibli" element={<StudioGhibli />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/justmytype" element={<JustMyType />} />
        <Route path="/gundamgetter" element={<GundamGetter />} />
        <Route path="/blogslab" element={<BlogsLab />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

interface AppProps {}

export default App;
