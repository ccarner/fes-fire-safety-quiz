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
  // const[{data, loading, error}, refetch] = useAxios(
  //   'https://fes-fire-safety-quiz.herokuapp.com/api/quizzes'
  // )
  const [menuOptions, setOptions] = useState([]);
  //const menu = axios.get('https://fes-fire-safety-quiz.herokuapp.com/api/quizzes').then(response => response.map(option=>ButtonBases(option.quizname, option.quizfile, "", setQuiz)));
  // const menu = listQuizzes.then(function(resp) {
  //   if (typeof resp == 'undefined'){
  //     console.log("quizapi not loading");

  //   } else {
  //     console.log("success");
  //   }

  // })
  useEffect(() => {
    axios.get('http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/quizzes/index.json')
    .then(response => {
      setOptions(response.data)
      console.log(menuOptions)
      //alert(JSON.stringify(menuOptions))
    })

  },[]);

  useLayoutEffect(() => {
    if(quiz){var getfrom = apiurl+quiz;
    axios.get((getfrom)).then(response => {
      setData(response.data)
      console.log("successful")
      console.log(quizdata)
      //alert(getfrom)

      console.log('http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/quizzes/'+quiz)
    })}
    //.then(
    // (response) => {console.log(response.data);alert("success");setOptions(response.data)})
    // .catch((err) =>{console.log(err)});  
     

  }, [quiz]);
  // if (loading) return <p>Loading...</p>
  // else if (error) return <p>Error!</p>
  // console.log(data);
  const menu = menuOptions.filter(option => option.filename.split('.')[0]!=="index").map(option=>ButtonBases(option.filename, option.filename,"", setQuiz, classes, "", handleClickOpen, handleClose, selected))
  //listQuizzes().then(out => {console.log(out)});
  //const menu = quizList.map(option=>ButtonBases(option.quizname, option.quizfile, "", setQuiz))
  //alert(quiz);
  // alert(quizdata)
  if(quizdata === null){
    return (
      <React.Fragment>
        
        <h1>Quiz page</h1>
        {menu}
        
      </React.Fragment>
    );
   } else {
    //  alert(quizdata)
     //console.log(JSON.stringify(quiz))
     //setQuiz("test");
     //alert('beep')
      return (
      //alert(quiz),
      <React.Fragment>
        <h1>asdf</h1>
        <QuizBee jsonURL = {quizdata}/>
      </React.Fragment>
      //try using useEffect
    );
   }
  
}

function quickmenu(quizname, quizfile, setQuiz){
  return (
    <div>
    <Button
    variant = "contained"
     onClick = {() => setQuiz(quizfile)}
    > 
    {quizname}</Button>
    </div>
  )
}

export default QuizPage;
