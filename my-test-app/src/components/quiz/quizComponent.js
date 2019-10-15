import React, { Component } from "react";

//import QuizAPI from './api/questions.json'
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import ReactDOM from "react-dom";
import "./quizComponent.css";

/**
 * responsible for rendering a quiz module when the user takes a quiz
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_questions: [],
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      allQuestions: [],
      answer: "",
      selectedAnswers: {},
      result: "",
      media: "",
      media_src: "",
      questionTotal: 0,
      maxChoices: 1,
      rendered: false
    };
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
<<<<<<< HEAD
    this.viewreults = this.viewreults.bind(this);
=======
    this.viewresults = this.viewresults.bind(this);


    



>>>>>>> dde4707111419dd2d609201bfb7f1911c7cd6079
  }
  handleAnswerSelected(e, value) {
    var _self = this;
    var obj = _self.state.selectedAnswers;
    var index = parseInt(value);
    console.log(
      "for selected question number " +
        (_self.state.counter + 1) +
        " answer is " +
        index +
        " selected"
    );
    var Qindex = _self.state.counter;
    // create map and store all selecred answers with quiz Questions
    if (obj[Qindex] === undefined) {
      var answerSet = new Set();
      answerSet.add(index);
      obj[Qindex] = answerSet;
    } else {
      if (obj[Qindex].has(index)) {
        obj[Qindex].delete(index);
      } else {
        if (obj[Qindex].size === this.state.maxChoices) {
          if (this.state.maxChoices == 1) {
            var answerSet = new Set();
            answerSet.add(index);
            obj[Qindex] = answerSet;
          } else {
          }
        } else {
          obj[Qindex].add(index);
        }
      }
    }
    _self.setState({ selectedAnswers: obj });
  }
  /*getQuestions = ()=> {
    QuizAPI().then(question => {
        this.setState({
            quiz_questions: question
        });
    });
  };*/
  componentDidMount() {
    // this.quiz_questions =  require("./api/questions.json");
    //this.quiz_questions = QuizAPI;
    // this.setState({
    //   question: this.quiz_questions[0].question,
    //   answerOptions : this.quiz_questions[0].answers,
    //   media: this.quiz_questions[0].media,
    //   media_src: this.quiz_questions[0].media_src,
    //   allQuestions : this.quiz_questions
    // });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    var maxChoices = 1;
    if (this.quiz_questions[counter].max_choices !== undefined) {
      maxChoices = this.quiz_questions[counter].max_choices;
    }

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.quiz_questions[counter].question,
      answerOptions: this.quiz_questions[counter].answers,
      media: this.quiz_questions[counter].media,
      media_src: this.quiz_questions[counter].media_src,
      answer: "",
      maxChoices: maxChoices
    });
  }
  setPreviousQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;
    var maxChoices = 1;
    if (this.quiz_questions[counter].max_choices !== undefined) {
      maxChoices = this.quiz_questions[counter].max_choices;
    }

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.quiz_questions[counter].question,
      answerOptions: this.quiz_questions[counter].answers,
      media: this.quiz_questions[counter].media,
      media_src: this.quiz_questions[counter].media_src,
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
<<<<<<< HEAD
      <Quiz
        viewreults={this.viewreults}
=======
      <Quiz viewresults={this.viewresults}
>>>>>>> dde4707111419dd2d609201bfb7f1911c7cd6079
        setNextQuestion={this.setNextQuestion}
        counter={this.state.counter}
        setPreviousQuestion={this.setPreviousQuestion}
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
    );
  }

  renderResult() {
    return (
      <Result
        quiz_questions={this.state.allQuestions}
        answers={this.state.selectedAnswers}
      />
    );
  }
<<<<<<< HEAD
  viewreults(e) {
    e.preventDefault();
    this.setState({ result: true });
=======
  viewresults(e){
    e.preventDefault();
    var i;
    for (i=0;i<this.quizQuestions.length;i++){
      if(this.state.selectedAnswers[i]===undefined){
        alert("You have not answered all questions. Please go back and finish the quiz.")
        return 0;
      }
      this.setState({result : true})
    }
   
    
>>>>>>> dde4707111419dd2d609201bfb7f1911c7cd6079
  }
  // decide to render result or quiz
  render() {
    if (this.props.jsonURL !== undefined && this.state.rendered === false) {
      //this.quiz_questions = QuizAPI;
      this.quiz_questions = this.props.jsonURL; //require(""+this.props.jsonURL);

      //set default max number of choices
      var maxChoices = 1;
      if (this.quiz_questions[0].max_choices !== undefined) {
        maxChoices = this.quiz_questions[0].max_choices;
      }
      this.setState({
        question: this.quiz_questions[0].question,
        answerOptions: this.quiz_questions[0].answers,
        media: this.quiz_questions[0].media,
        media_src: this.quiz_questions[0].media_src,
        allQuestions: this.quiz_questions,
        rendered: true,
        questionTotal: this.quiz_questions.length,
        maxChoices: maxChoices
      });
    }

    return (
      <div className="App">
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
