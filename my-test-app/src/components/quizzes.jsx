import React, { Component, useState, useEffect, useLayoutEffect } from "react";
import Quiz from "./quiz/quiz";
//import test from './quiz/api/newquestions.json';
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
//import useAxios from 'axios-hooks';
import ButtonBases from "./newMenu";
import Button from "@material-ui/core/Button";
import useStyles from "./menustyle";
import { Link, Redirect } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IndexedDataBase from "../dataStorage.js";

function QuizPage(props) {
  const classes = useStyles();
  const [selected, setselected] = useState(null);
  const apiurl =
    "http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/quizzes/";

  function handleClickOpen(name) {
    setselected(name);
  }
  function handleClose() {
    setselected(null);
  }
  function capitalise(input) {
    return input[0].toUpperCase() + input.slice(1);
  }

  const [quiz, setQuiz] = useState(null);
  const [quizdata, setData] = useState(null);
  const [quizToRestore, setQuizToRestore] = useState(null);

  const [menuOptions, setOptions] = useState([]);
  //this useEffect only runs on first loading, and pulls the menu options from the api
  useEffect(() => {
    axios
      .get(
        "http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/quizzes/index.json"
      )
      .then(response => {
        setOptions(response.data);
        console.log("menuOptions", menuOptions, response.data);
        //alert(JSON.stringify(menuOptions))
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  //this option runs after a quiz has been selected and start module has been pressed, and pulls the quiz questions from the api
  useLayoutEffect(() => {
    if (quiz) {
      var getfrom = apiurl + quiz;
      axios
        .get(getfrom)
        .then(response => {
          setData(response.data);
          console.log("successful");
          //console.log(quizdata)
          //console.log('http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/quizzes/'+quiz)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [quiz]);
  //renders a menu based on options from the api, and filters out the index.json file
  const menu = menuOptions
    .filter(
      option =>
        option.filename.split(".")[0] !== "index" &&
        !option.filename.includes("hidden_")
    )
    .map(option =>
      ButtonBases(
        option.title || option.filename,
        option.filename,
        "",
        setQuiz,
        classes,
        selected
      )
    );
  //if a quiz has not yet been selected render the menu, otherwise render the quiz
  if (quizdata === null) {
    return (
      <React.Fragment>
        <h1>Quiz page</h1>
        {menu}
        {selected && (
          // TODO: move this dialog to the separate 'popup' component, which isn't finished!
          <Dialog
            //this checks if the menu option has been selected, and if it is then open the corresponding dialog box
            open={selected}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="MenuDialog">{"Checklist"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {"test for now"}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                variant="contained"
                color="primary"
                text_transform="none"
                classes={{
                  label: classes.label
                }}
              >
                Close
              </Button>
              <Button
                //when the button is clicked execute the callback function
                onClick={() => {
                  setQuiz(selected);
                }}
                variant="contained"
                color="primary"
                text_transform="none"
                classes={{
                  label: classes.label
                }}
              >
                Start Module
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>{capitalise(quizdata.title)}</h1>
        <Quiz jsonURL={quizdata.quiz_questions} />
      </React.Fragment>
    );
  }
}

export default QuizPage;
