import * as Types from "../../Types";

export const BlogsLabDetails: Types.ProjectDetails = {
  title: "Blogs Lab",
  details: `Blogs Lab is a Full Stack application from the Covalence bootcamp.  
  Students are tasked with developing every aspect from the back-end to the front-end, 
  the MySQL database, the API endpoints, and the server to handle the endpoints.`,
  techStack: [`MySQL`, `Express`, `React`, `NodeJS`],
  imgURI: "",
  pageURL: `/blogslab`,
  appURL: ``,
  lab: true,
  personalProject: false,
};

export const GundamPlanetDetails = {
  title: "Gundam Planet Scraper",
  details: `Gundam Planet Scraper is a personal project I worked on after the bootcamp. 
  Using data from Google Sheets, the server launches a headless browser via Selenium to scrape data from select websites, 
  then writes that data back to a Google Sheet.`,
  techStack: [`Google Sheets API`, `Express`, `React`, `NodeJS`, `Selenium`],
  imgURI: "",
  pageURL: `/gundamplanet`,
  appURL: ``,
  lab: false,
  personalProject: true,
};

export const IdleGameDetails = {
  title: "Idle Scape",
  details: `Idle Scape is a Full-Stack application and my final project for the Covalence bootcamp.`,
  techStack: [`MongoDB`, `Express`, `React`, `Redux`, `NodeJS`],
  imgURI: "",
  pageURL: `/idlegame`,
  appURL: `https://ejmdev-idlescape.herokuapp.com/`,
  lab: false,
  personalProject: true,
};
export const JustMyTypeDetails = {
  title: "Just My Type Lab",
  details: `The Just My Type Lab is the last lab before the React section in the Covalence bootcamp.
    Students are tasked with writing the logic to create a typing game.`,
  techStack: [`HTML`, `JavaScript`, `CSS`],
  imgURI: "",
  pageURL: `/justmytype`,
  appURL: `https://eric-just-my-type.herokuapp.com/`,
  lab: true,
  personalProject: false,
};
export const StudioGhibliDetails = {
  title: "Studio Ghibli Lab",
  details: `The Studio Ghibli Lab is one of the first labs in the React section of the Covalence bootcamp.
    Students are tasked with making fetch requests to an API, then displaying the data.`,
  techStack: [`Express`, `React`, `NodeJS`],
  imgURI: "",
  pageURL: `/studioghibli`,
  appURL: `https://eric-studio-ghibli-api.herokuapp.com/`,
  lab: true,
  personalProject: false,
};
export const TicTacToeDetails = {
  title: "Tic Tac Toe Lab",
  details: `Tic Tac Toe is the last lab in the prepwork section of the Covalence bootcamp.  
  Students are tasked with coding a functional game using Javascript, HTML and CSS.`,
  techStack: [`HTML`, `JavaScript`, `CSS`],
  imgURI: "",
  pageURL: `/tictactoe`,
  appURL: `https://ejmdev-tic-tac-toe.herokuapp.com/`,
  lab: true,
  personalProject: false,
};
export const ProjectArray: Types.ProjectDetails[] = [
  IdleGameDetails,
  BlogsLabDetails,
  StudioGhibliDetails,
  GundamPlanetDetails,
  JustMyTypeDetails,
  TicTacToeDetails,
];
