import React, { Component } from "react";
import QuizBee from "./quiz/quiz";

class QuizPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Quiz page</h1>
        <QuizBee />
      </React.Fragment>
    );
  }
}

export default QuizPage;
