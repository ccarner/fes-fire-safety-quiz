import React, { Component } from "react";
import QuizBee from "./quiz/quizComponent";

class QuizPage extends Component {
  state = {};
  render() {
   
    return (
      <React.Fragment>
        <h1>Quiz page</h1>
      <QuizBee jsonURL = {"./api/questions.json"} /> 
      </React.Fragment>
    );
  }
}

export default QuizPage;
