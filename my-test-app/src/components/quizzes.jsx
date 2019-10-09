import React, { Component, useState, useEffect, useLayoutEffect } from "react";
import QuizBee from "./quiz/quizComponent";
//import test from './quiz/api/newquestions.json';
import { makeStyles } from "@material-ui/core/styles";

import quizList from "./quiz/api/quizList";
import axios from 'axios';
//import useAxios from 'axios-hooks';
import ButtonBases from "./newMenu";
import Button from '@material-ui/core/Button'
import ModuleStart from './popupComponent';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  label: {
    textTransform: 'capitalize',
  },
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


function AlertDialog(popuptext, buttonfunc, classes) {
  //const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  var text = "Click the start module button to proceed"
  if(popuptext!=""){
      text = popuptext;
  }

  function handleClickOpen() {
      setOpen(true);
  }



  function handleClose() {
      setOpen(false);
  }


  return (
      <div>
          {/* <button className="FES_CALL-btn" onClick={handleClickOpen}>Start</button> */}

          <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
              <DialogTitle id="alert-dialog-title">{"Intro to Fire Safety"}</DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                      {text}
                  </DialogContentText>

              </DialogContent>
              <DialogActions>
                  <Button onClick={handleClose} variant= 'contained' color="primary" text_transform = "none"
                  classes = {{
                      label: classes.label,
                    }}>
                      Close
        </Button>
                  <Button onClick={buttonfunc} variant= 'contained' color="primary" text_transform = "none"
                  classes = {{
                      label: classes.label,
                    }}>
                      Start Module
        </Button>
              </DialogActions>
          </Dialog>
      </div>
  );
}


function QuizPage(props){
  const classes = useStyles();
  const [selected, setselected] = useState(null);

  function handleClickOpen(name){
    setselected(name)
  }
  function handleClose(){
    setselected(null);
  }

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
    axios.get('http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/quizzes/index.json')
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
  const menu = menuOptions.map(option=>ButtonBases(option.filename, option.quizfile,"", setQuiz, classes, "", handleClickOpen, handleClose, selected))
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
