import React, { Component, useState, useEffect, useLayoutEffect } from "react";
import QuizBee from "./quiz/quizComponent";
//import test from './quiz/api/newquestions.json';
import { makeStyles } from "@material-ui/core/styles";

import quizList from "./quiz/api/quizList";
import axios from 'axios';
//import useAxios from 'axios-hooks';
import ButtonBases from "./newMenu";
import Button from '@material-ui/core/Button'
import useStyles from './menustyle'


function QuizPage(props){
  const classes = useStyles();
  const [selected, setselected] = useState(null);
  const apiurl = 'http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/quizzes/';

  function handleClickOpen(name){
    setselected(name)
  }
  function handleClose(){
    setselected(null);
  }

  const [quiz, setQuiz] = useState(null);
  const [quizdata, setData] = useState(null);

  const [menuOptions, setOptions] = useState([]);
//this useEffect only runs on first loading, and pulls the menu options from the api
  useEffect(() => {
    axios.get('http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/quizzes/index.json')
    .then(response => {
      setOptions(response.data)
      console.log(menuOptions)
      //alert(JSON.stringify(menuOptions))
    }).catch((err) =>{console.log(err)})

  },[]);
//this option runs after a quiz has been selected and start module has been pressed, and pulls the quiz questions from the api
  useLayoutEffect(() => {
    if(quiz){var getfrom = apiurl+quiz;
    axios.get((getfrom)).then(response => {
      setData(response.data)
      console.log("successful")
      //console.log(quizdata)
      //console.log('http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/quizzes/'+quiz)
    }).catch((err) =>{console.log(err)})}

     

  }, [quiz]);
//renders a menu based on options from the api, and filters out the index.json file
  const menu = menuOptions.filter(option => option.filename.split('.')[0]!=="index").map(option=>ButtonBases(option.title, option.filename,"", setQuiz, classes, option.description, handleClickOpen, handleClose, selected))
//if a quiz has not yet been selected render the menu, otherwise render the quiz
  if(quizdata === null){
    return (
      <React.Fragment>
        
        <h1>Quiz page</h1>
        {menu}
        
      </React.Fragment>
    );
   } else {

      return (
      <React.Fragment>
        <h1>asdf</h1>
        <QuizBee jsonURL = {quizdata.quiz_questions}/>
      </React.Fragment>
    );
   }
  
}

export default QuizPage;
