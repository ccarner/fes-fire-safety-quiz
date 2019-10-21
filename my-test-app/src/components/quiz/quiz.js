import React, { Component } from "react";

//import QuizQuestionAPI from './api/questions.json'
import QuizQuestion from "./components/quizQuestion";
import Result from "./components/resultPage.jsx";
import "./quizLogic.css";
import StandardPaper from "../uiComponents/standardPaper.jsx";
import Grid from "@material-ui/core/Grid";
import QuestionCount from "./components/questionCount.js";
import SubmitButton from "../uiComponents/submitButton.jsx";
import StandardButton from "../uiComponents/standardButton.jsx";

/**
 * responsible for rendering a quiz module when the user takes a quiz
 */
class Quiz extends Component {
  constructor(props) {
    super(props);

    let maxChoices = this.props.questions[0].max_choices;
    maxChoices = maxChoices !== undefined ? maxChoices : 1;

    //set up state for first question
    this.state = {
      counter: 0,
      questionId: 1,
      answer: "",
      selectedAnswers: {},
      result: false,
      question: this.props.questions[0].question,
      answerOptions: this.props.questions[0].answers,
      media: this.props.questions[0].media,
      media_src: this.props.questions[0].media_src,
      rendered: true,
      questionTotal: this.props.questions.length,
      maxChoices: maxChoices
    };

    //for viewing already completed quizzes
    if (this.props.submitted === true) {
      this.state.result = true;
      this.state.selectedAnswers = this.props.selections;
    }
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.viewresults = this.viewresults.bind(this);
  }

  handleAnswerSelected(e, value) {
    var obj = this.state.selectedAnswers;
    var index = parseInt(value);
    console.log(
      "for selected question number " +
        (this.state.counter + 1) +
        " answer is " +
        index +
        " selected"
    );

    var Qindex = this.state.counter;
    var answerSet;
    // create map and store all selected answers with quiz Questions
    if (obj[Qindex] === undefined) {
      answerSet = new Set();
      answerSet.add(index);
      obj[Qindex] = answerSet;
    } else {
      if (obj[Qindex].has(index)) {
        obj[Qindex].delete(index);
      } else {
        if (obj[Qindex].size === this.state.maxChoices) {
          if (this.state.maxChoices == 1) {
            answerSet = new Set();
            answerSet.add(index);
            obj[Qindex] = answerSet;
          } else {
          }
        } else {
          obj[Qindex].add(index);
        }
      }
    }
    this.setState({ selectedAnswers: obj });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    var maxChoices = 1;
    if (this.props.questions[counter].max_choices !== undefined) {
      maxChoices = this.props.questions[counter].max_choices;
    }

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.props.questions[counter].question,
      answerOptions: this.props.questions[counter].answers,
      media: this.props.questions[counter].media,
      media_src: this.props.questions[counter].media_src,
      answer: "",
      maxChoices: maxChoices
    });
  }

  setPreviousQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;
    var maxChoices = 1;
    if (this.props.questions[counter].max_choices !== undefined) {
      maxChoices = this.props.questions[counter].max_choices;
    }

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.props.questions[counter].question,
      answerOptions: this.props.questions[counter].answers,
      media: this.props.questions[counter].media,
      media_src: this.props.questions[counter].media_src,
      answer: "",
      maxChoices: maxChoices
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Undetermined" });
    }
  }

  renderQuiz() {
    return (
      <React.Fragment>
        <QuestionCount
          counter={this.state.questionId}
          total={this.state.questionTotal}
        />
        <QuizQuestion
          counter={this.state.counter}
          answer={this.state.answer}
          selectedAnswer={this.state.selectedAnswers[this.state.counter]}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={this.state.questionTotal}
          onAnswerSelected={this.handleAnswerSelected}
          media={this.state.media}
          media_src={this.state.media_src}
          maxChoices={this.state.maxChoices}
        />
        {this.renderControls()}
      </React.Fragment>
    );
  }

  renderResult() {
    return (
      <Result
        quiz_questions={this.props.questions}
        answers={this.state.selectedAnswers}
      />
    );
  }

  viewresults(e) {
    e.preventDefault();
    for (var i = 0; i < this.props.questions.length; i++) {
      if (this.state.selectedAnswers[i] === undefined) {
        alert(
          "You have not answered all questions. Please go back and finish the quiz."
        );
        return 0;
      }
    }
    this.setState({ result: true });
    //if passed in a method to save the results, use it now.
    if (this.props.handleSubmit) {
      this.props.handleSubmit(this.state.selectedAnswers);
    }
  }

  renderControls() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#eeeeee" }}>
          {this.state.counter > 0 ? (
            <StandardButton onClick={this.setPreviousQuestion}>
              {"🡨 Prev"}
            </StandardButton>
          ) : (
            <div></div>
          )}

          {this.state.counter < this.state.questionTotal - 1 ? (
            <StandardButton onClick={this.setNextQuestion}>
              {"Next 🡪"}
            </StandardButton>
          ) : (
            <div></div>
          )}
          {this.state.counter === this.state.questionTotal - 1 ? (
            <div>
              <SubmitButton onClick={this.viewresults}>Submit</SubmitButton>
            </div>
          ) : (
            <div></div>
          )}
        </div>{" "}
      </React.Fragment>
    );
  }

  // decide to render result or quiz
  render() {
    return (
      <Grid>
        <StandardPaper>
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </StandardPaper>
      </Grid>
    );
  }
}

export default Quiz;
