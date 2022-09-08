import * as express from "express";
import * as path from "path";
import apiRouter from "./routes";
let cors = require("cors");

const app = express();

app.use(express.static("public"));
app.use(apiRouter);
app.use(cors());

// establishes paths for client to use
// add any views where the user should be able to refresh on
const clientPaths = [
  "/",
  "/idlegame",
  "/studioghibli",
  "/tictactoe",
  "/justmytype",
  "/gundamgetter",
  "/blogslab",
  "/resume",
];

// allows for refreshing on client paths
app.get(clientPaths, (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}.`));
