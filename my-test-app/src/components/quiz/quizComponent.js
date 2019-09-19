import React, { Component } from 'react';

import QuizAPI from './api/questions.json';
import Quiz from './components/Quiz';
import Result from './components/Result';
import ReactDOM from "react-dom";
import './quizComponent.css';


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      quizQuestions:[],
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      allQuestions : [],
      answer: '',
      selectedAnswers : {},
      result: '',
      media:"",
      media_src:"",
      questionTotal: QuizAPI.length
    };
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.viewreults = this.viewreults.bind(this);



  }
  handleAnswerSelected(e){
    var _self = this;
    var obj = _self.state.selectedAnswers;
    var index = parseInt(e.target.value);
    console.log("for selected question number " + (_self.state.counter + 1) +  " answer is " + index + " selected");
    var Qindex = (_self.state.counter )
    // create map and store all selecred answers with quiz Questions
    obj[Qindex] = index;
    _self.setState({selectedAnswers : obj})

  }
  getQuestions = ()=> {
    QuizAPI().then(question => {
        this.setState({
            quizQuestions: question
        });
    });
  };
  componentDidMount() {
    this.quizQuestions = QuizAPI;
    this.setState({
      question: this.quizQuestions[0].question,
      answerOptions : this.quizQuestions[0].answers,
      media: this.quizQuestions[0].media,
      media_src: this.quizQuestions[0].media_src,
      allQuestions : this.quizQuestions
    });
  }


  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.quizQuestions[counter].question,
      answerOptions: this.quizQuestions[counter].answers,
      media: this.quizQuestions[counter].media,
      media_src: this.quizQuestions[counter].media_src,
      answer: ''
    });
  }
  setPreviousQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.quizQuestions[counter].question,
      answerOptions: this.quizQuestions[counter].answers,
      media: this.quizQuestions[counter].media,
      media_src: this.quizQuestions[counter].media_src,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    
    return (
      <Quiz viewreults={this.viewreults}
        setNextQuestion={this.setNextQuestion}
        counter={this.state.counter}
        setPreviousQuestion={this.setPreviousQuestion}
        answer={this.state.answer}
        selectedAnswer = {this.state.selectedAnswers[this.state.counter]}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal = {this.state.questionTotal}
        onAnswerSelected = {this.handleAnswerSelected}
        media = {this.state.media}
        media_src = {this.state.media_src}
      />
    );
  }

  renderResult() {
    return (
      <Result quizQuestions={this.state.allQuestions} answers={this.state.selectedAnswers} />
    );
  }
  viewreults(e){
    e.preventDefault();
    this.setState({result : true})
  }
 // decide to render result or quiz
  render() {
    return (
      <div className="App">
        
        {this.state.result ? this.renderResult() : this.renderQuiz()}


      </div>

    );
  }

}

ReactDOM.render(<App/>, document.getElementById("root"))
export default App;
