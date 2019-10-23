import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StandardPaper from "../../uiComponents/standardPaper.jsx";
import { Link } from "react-router-dom";

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { answerCards: this.generateAnswerCards(), correctCounter: 0 };
    this.generateAnswerCards = this.generateAnswerCards.bind(this);
  }

  formatSet(set, answerTexts) {
    console.log("set is", set, set.size);
    var outString = "";
    set.forEach((answer, index) => {
      outString += answerTexts[answer];
      if (index < set.size - 1) {
        outString += ",";
      }
    });
    console.log("outstring is", outString);
    return outString;
  }

  equalSet(as, bs) {
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
  }

  //calculate answers correct and add to an array so can render them
  generateAnswerCards() {
    return this.props.quiz_questions.map((question, index) => {
      let correctAnswerSet = new Set(question.answer_index);
      //get corresponding answerSet from props (ie matches the current mapped q)
      let userAnswerSet = this.props.answers[index];

      let userAnswerFragment;
      let questionFragment;
      let correctAnswerFragment = (
        <React.Fragment>
          <Typography>
            Correct Answer: {this.formatSet(correctAnswerSet, question.answers)}
          </Typography>
        </React.Fragment>
      );

      //formatting for user answer, red if incorrect else green
      let userAnswerStyle = { color: "red" };
      if (this.equalSet(correctAnswerSet, userAnswerSet)) {
        //answer is correct!
        userAnswerStyle = { color: "green" };

        //increase the number of correct answers
        this.setState(prevState => {
          return { correctCounter: prevState.correctCounter + 1 };
        });
      }

      userAnswerFragment = (
        <React.Fragment>
          <Typography style={userAnswerStyle}>
            Your Answer: {this.formatSet(userAnswerSet, question.answers)}
          </Typography>
        </React.Fragment>
      );

      questionFragment = (
        <React.Fragment>
          <Typography>Question: {question.question}</Typography>
        </React.Fragment>
      );
      return (
        <React.Fragment>
          {questionFragment}
          {correctAnswerFragment}
          {userAnswerFragment}
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" component="h2">
          Results
        </Typography>
        <Typography>
          Scored {this.state.correctCounter}/{this.props.quiz_questions.length}
        </Typography>
        {this.state.answerCards.map(result => {
          return <StandardPaper>{result}</StandardPaper>;
        })}
        <Button variant="contained" component={Link} to="/quizzes">
          More quizzes
        </Button>
      </React.Fragment>
    );
  }
}

export default ResultsPage;
