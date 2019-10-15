import React, { Component, useState, useEffect, useLayoutEffect } from "react";
import Modulepage from "./infoModules/module";
//import test from './quiz/api/newquestions.json';
import { makeStyles } from "@material-ui/core/styles";


import axios from 'axios';
//import useAxios from 'axios-hooks';
import ButtonBases from "./newMenu";
import Button from '@material-ui/core/Button'
import useStyles from './menustyle'


function QuizPage(props){
  const classes = useStyles();
  const [selected, setselected] = useState(null);
  const apiurl = 'http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/modules/';

  function handleClickOpen(name){
    setselected(name)
  }
  function handleClose(){
    setselected(null);
  }

  const [module, setModule] = useState(null);
  const [moduledata, setData] = useState(null);

  const [menuOptions, setOptions] = useState([]);
//this useEffect only runs on first loading, and pulls the menu options from the api
  useEffect(() => {
    axios.get(apiurl + 'index.json')
    .then(response => {
      setOptions(response.data)
      console.log(menuOptions)
      //alert(JSON.stringify(menuOptions))
    }).catch((err) =>{console.log(err)})

  },[]);
//this option runs after a quiz has been selected and start module has been pressed, and pulls the quiz questions from the api
  useLayoutEffect(() => {
    if(module){var getfrom = apiurl+module;
    axios.get((getfrom)).then(response => {
      setData(response.data)
      console.log("successful")
      //alert(moduledata)
      //console.log(quizdata)
      //console.log('http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/quizzes/'+quiz)
    }).catch((err) =>{console.log(err)})}

     

  }, [module]);
//renders a menu based on options from the api, and filters out the index.json file
  const menu = menuOptions.filter(option => option.filename.split('.')[0]!=="index").map(option=>ButtonBases(option.filename, option.filename,"", setModule, classes, option.description, handleClickOpen, handleClose, selected))
//if a quiz has not yet been selected render the menu, otherwise render the quiz
  if(moduledata === null){
    return (
      <React.Fragment>
        
        <h1>Information Modules</h1>
        {menu}
        
      </React.Fragment>
    );
   } else {

      return (
      <React.Fragment>
        <h1>{module};</h1>
        <Modulepage htmlstring = {moduledata}/>
      </React.Fragment>
    );
   }
  
}

export default QuizPage;
