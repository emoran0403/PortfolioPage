import * as React from "react";
import { useState, useEffect } from "react";
import Fetcher from "./ClientUtils/Fetcher";

const App = (props: AppProps) => {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // make fetches to projects here so they will be immediately available when accessed
  //     Fetcher.GET("https://ejmdev-idlescape.herokuapp.com/game")
  //       .then(() => {
  //         // return Fetcher.GET();
  //       })
  //       .then(() => {
  //         // return Fetcher.GET();
  //       })
  //       .catch((err) => {
  //         console.log(`There was an error fetching the projects`);
  //         console.log(err);
  //       });
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">Hello</h1>
    </main>
  );
};

interface AppProps {}

export default App;

// useEffect(() => {
//   const interval = setInterval(() => {
//     // make fetches to projects here so they will be immediately available when accessed
//     Fetcher.GET("https://ejmdev-idlescape.herokuapp.com/game").catch((err) => {
//       console.log(`There was an error fetching "https://ejmdev-idlescape.herokuapp.com/game"`);
//       console.log(err);
//     });
//     Fetcher.GET("projecturlhere").catch((err) => {
//       console.log(`There was an error fetching "projecturlhere"`);
//       console.log(err);
//     });
//     Fetcher.GET("projecturlhere").catch((err) => {
//       console.log(`There was an error fetching "projecturlhere"`);
//       console.log(err);
//     });
//     Fetcher.GET("projecturlhere").catch((err) => {
//       console.log(`There was an error fetching "projecturlhere"`);
//       console.log(err);
//     });
//     Fetcher.GET("projecturlhere").catch((err) => {
//       console.log(`There was an error fetching "projecturlhere"`);
//       console.log(err);
//     });
//     Fetcher.GET("projecturlhere").catch((err) => {
//       console.log(`There was an error fetching "projecturlhere"`);
//       console.log(err);
//     });
//   }, 10000);

//   return () => clearInterval(interval);
// }, []);
