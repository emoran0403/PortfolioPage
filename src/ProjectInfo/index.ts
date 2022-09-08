import * as Types from "../../Types";

export const BlogsLabDetails: Types.ProjectDetails = {
  title: "Blogs Lab",
  details: `Blogs Lab is a Full Stack application from the Covalence bootcamp.  
  Students are tasked with developing every aspect from the back-end to the front-end, 
  the MySQL database, the API endpoints, and the server to handle the endpoints.`,
  techStack: [`MySQL`, `Express`, `React`, `Typescript`, `NodeJS`],
  pageURL: `/blogslab`,
  appURL: ``,
  gitHubURL: "https://github.com/emoran0403/blogs-lab",
  lab: true,
  personalProject: false,
};
export const GundamPlanetDetails = {
  title: "Gundam Planet Scraper",
  details: `Gundam Planet Scraper is a personal project I worked on after the bootcamp. 
  Using data from Google Sheets, the server launches a headless browser via Selenium to scrape data from select websites, 
  then writes that data back to a Google Sheet.`,
  techStack: [`Google Sheets API`, `Express`, `React`, `Typescript`, `NodeJS`, `Selenium`],
  pageURL: `/gundamplanet`,
  appURL: ``,
  gitHubURL: "https://github.com/emoran0403/Gundam-Getter",
  lab: false,
  personalProject: true,
};
export const IdleGameDetails = {
  title: "IdleScape",
  details: `IdleScape is a Full-Stack application and my final project for the Covalence bootcamp.`,
  techStack: [`MongoDB`, `Express`, `React`, `Redux`, `Typescript`, `NodeJS`],
  pageURL: `/idlegame`,
  appURL: `https://ejmdev-idlescape.herokuapp.com/`,
  gitHubURL: "https://github.com/emoran0403/Idle-Game",
  lab: false,
  personalProject: true,
};
export const JustMyTypeDetails = {
  title: "Just My Type Lab",
  details: `The Just My Type Lab is the last lab before the React section in the Covalence bootcamp.
    Students are tasked with writing the logic to create a typing game.`,
  techStack: [`HTML`, `JavaScript`, `CSS`],
  pageURL: `/justmytype`,
  appURL: `https://eric-just-my-type.herokuapp.com/`,
  gitHubURL: "https://github.com/emoran0403/Just-my-Type",
  lab: true,
  personalProject: false,
};
export const StudioGhibliDetails = {
  title: "Studio Ghibli Lab",
  details: `The Studio Ghibli Lab is one of the first labs in the React section of the Covalence bootcamp.
    Students are tasked with making fetch requests to an API, then displaying the data.`,
  techStack: [`JavaScript`, `React`, `Create React App`],
  pageURL: `/studioghibli`,
  appURL: `https://ejmdev-ghibli-getter.herokuapp.com/`,
  gitHubURL: "https://github.com/emoran0403/Nicer-Ghibli-App",
  lab: true,
  personalProject: false,
};
export const TicTacToeDetails = {
  title: "Tic Tac Toe Lab",
  details: `Tic Tac Toe is the last lab in the prepwork section of the Covalence bootcamp.  
  Students are tasked with coding a functional game using Javascript, HTML and CSS.`,
  techStack: [`HTML`, `JavaScript`, `CSS`],
  pageURL: `/tictactoe`,
  appURL: `https://ejmdev-tic-tac-toe.herokuapp.com/`,
  gitHubURL: "https://github.com/emoran0403/Tic-Tac-Toe-Lab",
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
