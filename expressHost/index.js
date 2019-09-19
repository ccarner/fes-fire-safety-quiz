const express = require("express");
const path = require("path");
const fs = require("fs");
const appBuildFolder = "/my-test-app/build";
// gets the dir string to ROOT of project (ie up one folder)
const rootProjectFolder = path.dirname(__dirname);
const buildFolder = path.parse("/client/build");
const clientBuildFolder = path.join(rootProjectFolder, appBuildFolder);

const app = express();

// Serve static files from the React app
app.use(express.static(clientBuildFolder));

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
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildFolder, "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`FES Express listening on ${port}`);
