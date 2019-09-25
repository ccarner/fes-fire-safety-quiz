const express = require("express");
// logging
const morgan = require("morgan");
const cors = require('cors');

const path = require("path");
const fs = require("fs");
const appBuildFolder = "/my-test-app/build";
// gets the dir string to ROOT of project (ie up one folder)
const rootProjectFolder = path.dirname(__dirname);
const clientBuildFolder = path.join(rootProjectFolder, appBuildFolder);

const app = express();
app.use(morgan("tiny"));
//set cors to allow all cross sites to use api (eg localhost:5000)
app.use(cors());

// Serve static files from the React app
app.use("/app", express.static(clientBuildFolder));

// Put all API endpoints under '/api'
app.get("/api/quizzes", (req, res) => {
  // Return them as json

  fs.readFile("content/QuizJson.json", (err, data) => {
    if (err) throw err;

    let quizzes = JSON.parse(data);
    res.json(quizzes);
    console.log(`Sent quizzes as: \n ${quizzes} `);
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.

// app.get("*", (req, res) => {
//   console.log(
//     "inside catchall 2" +
//       req.url +
//       " new url -app =:" +
//       req.url.replace("/app", "")
//   );
//   res.sendFile(path.join(clientBuildFolder, req.url.replace("/app", "")));
// });

app.get("*", (req, res) => {
  console.log("inside catchall " + req.url);
  res.sendFile(path.join(clientBuildFolder, "/index.html"));
});

console.log(
  "dirname is",
  __dirname,

  "root proj folder is",
  rootProjectFolder,
  "clientbuildfolder is",
  clientBuildFolder
);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get("*", (req, res) => {
//   res.sendFile(path.join(clientBuildFolder, "index.html"));
//   console.log("sent homepage");
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`FES Express listening on ${port}`);
