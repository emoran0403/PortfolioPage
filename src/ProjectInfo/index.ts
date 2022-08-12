import * as Types from "../../Types";

export const BlogsLabDetails: Types.ProjectDetails = {
  title: "Blogs Lab",
  details: "short description here...",
  techStack: [`MySQL`, `Express`, `React`, `NodeJS`],
  imgURI: "",
  pageURL: `/blogslab`,
  appURL: ``,
};

export const GundamPlanetDetails = {
  title: "Gundam Planet Scraper",
  details: "short description here...",
  techStack: [`Google Sheets API`, `Express`, `React`, `NodeJS`, `Selenium`],
  imgURI: "",
  pageURL: `/gundamplanet`,
  appURL: ``,
};

export const IdleGameDetails = {
  title: "Idle Scape",
  details: "short description here...",
  techStack: [`MongoDB`, `Express`, `React`, `NodeJS`],
  imgURI: "",
  pageURL: `/idlegame`,
  appURL: `https://ejmdev-idlescape.herokuapp.com/`,
};

export const JustMyTypeDetails = {
  title: "Just My Type Lab",
  details: "short description here...",
  techStack: [`HTML`, `JavaScript`],
  imgURI: "",
  pageURL: `/justmytype`,
  appURL: `https://eric-just-my-type.herokuapp.com/`,
};

export const StudioGhibliDetails = {
  title: "Studio Ghibli CRUD App",
  details: "short description here...",
  techStack: [`Express`, `React`, `NodeJS`],
  imgURI: "",
  pageURL: `/studioghibli`,
  appURL: `https://eric-studio-ghibli-api.herokuapp.com/`,
};

export const TicTacToeDetails = {
  title: "Tic Tac Toe Lab",
  details: "short description here...",
  techStack: [`HTML`, `JavaScript`],
  imgURI: "",
  pageURL: `/tictactoe`,
  appURL: `https://ejmdev-tic-tac-toe.herokuapp.com/`,
};
export const ProjectArray: Types.ProjectDetails[] = [
  IdleGameDetails,
  BlogsLabDetails,
  StudioGhibliDetails,
  GundamPlanetDetails,
  JustMyTypeDetails,
  TicTacToeDetails,
];
