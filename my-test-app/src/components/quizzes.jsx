import React, { Component, useState, useEffect } from "react";
import QuizBee from "./quiz/quizComponent";
//import test from './quiz/api/newquestions.json';
import quizList from "./quiz/api/quizList";
import ButtonBases from "./ButtonBases";
 
//listReactFiles(__dirname).then(files => console.log(files))

function listQuizzes(){
  const path = require('path');
  const directoryPath = path.join(__dirname);
  return (quizList);
  }
function dothing(thing){
  var jsondata = require(`${thing}`);
  alert(thing);
  var str = JSON.stringify(jsondata);
  alert(str);
}

function QuizPage(props){
  const [quiz, setQuiz] = useState("");
  // useEffect(() => {
  //   //if(quiz != ""){
  //     return (
  //           alert(quiz),
  //           <React.Fragment>
  //             <h1>{quiz}</h1>
  //             <QuizBee />
  //           </React.Fragment>
  //     )
  //  // }
  // }, [quiz]);
  // alert(quiz);
   //if(quiz == ""){
    return (
      <React.Fragment>
        
        <h1>Quiz page</h1>
        {listQuizzes().map(option=>ButtonBases(option.quizname, option.quizfile, "", dothing))}
        <QuizBee />
      </React.Fragment>
    );
    
  //  } else {
  //    //setQuiz("test");
  //   return (
  //     alert(quiz),
  //     <React.Fragment>
  //       <h1>asdf</h1>
  //       <QuizBee />
  //     </React.Fragment>
  //     //try using useEffect
  //   );
  //  }
  
}

export default QuizPage;
