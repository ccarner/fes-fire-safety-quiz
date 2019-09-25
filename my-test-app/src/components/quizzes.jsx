import React, { Component, useState } from "react";
import QuizBee from "./quiz/quizComponent";
//import test from './quiz/api/newquestions.json';
import quizList from "./quiz/api/quizList";
import axios from 'axios';
import ButtonBases from "./ButtonBases";
 
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


function QuizPage(props){
  const [quiz, setQuiz] = useState(null);
  const [menuOptions, setOptions] = useState([]);
  //const menu = axios.get('https://fes-fire-safety-quiz.herokuapp.com/api/quizzes').then(response => response.map(option=>ButtonBases(option.quizname, option.quizfile, "", setQuiz)));
  // const menu = listQuizzes.then(function(resp) {
  //   if (typeof resp == 'undefined'){
  //     console.log("quizapi not loading");

  //   } else {
  //     console.log("success");
  //   }

  // })
  axios.get('https://fes-fire-safety-quiz.herokuapp.com/api/quizzes').then(
    (response) => {console.log(response.data);alert("success");setOptions(response.data)});
  const menu = menuOptions.map(option=>ButtonBases(option.quizname, option.quizfile, "", setQuiz))
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

export default QuizPage;
