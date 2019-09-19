import React, { Component } from "react";
import QuizBee from "./quiz/quizComponent";
import quizList from "./quiz/api/quizList";
import ButtonBases from "./ButtonBases";
 
//listReactFiles(__dirname).then(files => console.log(files))

function listQuizzes(){
  const path = require('path');
  //const fs = require('fs');
  //joining path of directory 
  const directoryPath = path.join(__dirname);
  //passsing directoryPath and callback function
  // fs.readdir(directoryPath, function (err, files) {
  //   //handling error
  //   if (err) {
  //       return console.log('Unable to scan directory: ' + err);
  //   } 
  //   //listing all files using forEach
  //   files.forEach(function (file) {
  //       // Do whatever you want to do with the file
  //       console.log(file); 
  //   });
  // });

  // fs.readdirSync(directoryPath).forEach(file => {
  //   console.log(file);
  // });
  // listRactFiles(__dirname).then(files => console.log(files))
  return (quizList);
  }
function dothing(thing){
  // return new QuizBee();
  return (
    alert('asdf'),
  <React.Fragment>
    thing
     <QuizBee/>;
  </React.Fragment>
  );
  //alert('asdf');
}
function QuizPage(props){
  
  
   
    return (
      <React.Fragment>
        
        <h1>Quiz page</h1>
        {listQuizzes().map(option=>ButtonBases(option.quizname, option.quizfile, "", dothing))}
        <QuizBee />
      </React.Fragment>
    );
  
}

export default QuizPage;
