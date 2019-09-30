import React, { Component, useState, useEffect, useLayoutEffect } from "react";
import QuizBee from "./quiz/quizComponent";
//import test from './quiz/api/newquestions.json';
import { makeStyles } from "@material-ui/core/styles";

import quizList from "./quiz/api/quizList";
import axios from 'axios';
//import useAxios from 'axios-hooks';
import ButtonBases from "./ButtonBases";
import Button from '@material-ui/core/Button'
 
//listReactFiles(__dirname).then(files => console.log(files))

// async function listQuizzes(){
  
//   try {
//     const response = await axios.get('https://fes-fire-safety-quiz.herokuapp.com/api/quizzes');
//     //console.log(JSON.stringify(response));
//     return response;
//   }
//   catch (error) {
//     console.log(error);
//   }
 
//   }

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

function QuizPage(props){
  const classes = useStyles();

  const [quiz, setQuiz] = useState(null);
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
    axios.get('https://fes-fire-safety-quiz.herokuapp.com/api/quizzes')
    .then(response => {
      setOptions(response.data)
      console.log(menuOptions)
    })
    //.then(
    // (response) => {console.log(response.data);alert("success");setOptions(response.data)})
    // .catch((err) =>{console.log(err)});  
     

  },[]);
  // if (loading) return <p>Loading...</p>
  // else if (error) return <p>Error!</p>
  // console.log(data);
  const menu = menuOptions.map(option=>ButtonBases(option.quizname, option.quizfile,"", setQuiz, classes))
  //listQuizzes().then(out => {console.log(out)});
  //const menu = quizList.map(option=>ButtonBases(option.quizname, option.quizfile, "", setQuiz))
  //alert(quiz);
  if(quiz === null){
    return (
      <React.Fragment>
        
        <h1>Quiz page</h1>
        {menu}
        
      </React.Fragment>
    );
   } else {
     //console.log(JSON.stringify(quiz))
     //setQuiz("test");
     //alert('beep')
      return (
      //alert(quiz),
      <React.Fragment>
        <h1>asdf</h1>
        <QuizBee jsonURL = {quiz}/>
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
