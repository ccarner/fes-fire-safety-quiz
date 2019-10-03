import React, { Component } from 'react';

//import QuizAPI from './api/questions.json'
import Quiz from './components/Quiz';
import Result from './components/Result';
import ReactDOM from "react-dom";
import './quizComponent.css';

/**
 * responsible for rendering a quiz module when the user takes a quiz
 */
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
      questionTotal: 0,
      maxChoices:100 ,
      rendered: false,

    };
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.viewreults = this.viewreults.bind(this);


    



  }
  handleAnswerSelected(e, value){
    var _self = this;
    var obj = _self.state.selectedAnswers;
    var index = parseInt(value);
      console.log("for selected question number " + (_self.state.counter + 1) +  " answer is " + index + " selected");
      var Qindex = (_self.state.counter )
      // create map and store all selecred answers with quiz Questions
      if (obj[Qindex] === undefined){
        var answerSet =  new Set();
        answerSet.add(index);
        obj[Qindex] = answerSet;
    } else{
          if(obj[Qindex].has(index)){
            obj[Qindex].delete(index);
     
          }else{if(obj[Qindex].size === this.state.maxChoices){
            if(this.state.maxChoices==1){
              var answerSet =  new Set();
              answerSet.add(index);
              obj[Qindex] = answerSet;
            }else{
              
            }

          }else{
            obj[Qindex].add(index);
           
          }
        }
 
    }
    _self.setState({selectedAnswers : obj})

  }
  /*getQuestions = ()=> {
    QuizAPI().then(question => {
        this.setState({
            quizQuestions: question
        });
    });
  };*/
  componentDidMount() {
  
    // this.quizQuestions =  require("./api/questions.json");

    //this.quizQuestions = QuizAPI;
    // this.setState({
    //   question: this.quizQuestions[0].question,
    //   answerOptions : this.quizQuestions[0].answers,
    //   media: this.quizQuestions[0].media,
    //   media_src: this.quizQuestions[0].media_src,
    //   allQuestions : this.quizQuestions
    // });
    
  }


  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    var maxChoices = 100;
    if (this.quizQuestions[counter].max_choices !== undefined){
      maxChoices = this.quizQuestions[counter].max_choices;
 
    }

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.quizQuestions[counter].question,
      answerOptions: this.quizQuestions[counter].answers,
      media: this.quizQuestions[counter].media,
      media_src: this.quizQuestions[counter].media_src,
      answer: '',
      maxChoices: maxChoices
    });
  }
  setPreviousQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;
    var maxChoices = 100;
    if (this.quizQuestions[counter].max_choices!== undefined){
      maxChoices = this.quizQuestions[counter].max_choices;
    }

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.quizQuestions[counter].question,
      answerOptions: this.quizQuestions[counter].answers,
      media: this.quizQuestions[counter].media,
      media_src: this.quizQuestions[counter].media_src,
      answer: '',
      maxChoices: maxChoices

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
    if (this.props.jsonURL !== undefined && this.state.rendered === false ) {
      //this.quizQuestions = QuizAPI;
      this.quizQuestions = this.props.jsonURL //require(""+this.props.jsonURL);

    //this.quizQuestions = QuizAPI;
    var maxChoices = 100;
    if (this.quizQuestions[0].max_choices !== undefined){
      maxChoices = this.quizQuestions[0].max_choices;
    }
    this.setState({
      question: this.quizQuestions[0].question,
      answerOptions : this.quizQuestions[0].answers,
      media: this.quizQuestions[0].media,
      media_src: this.quizQuestions[0].media_src,
      allQuestions : this.quizQuestions,
      rendered: true,
      questionTotal: this.quizQuestions.length,
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

ReactDOM.render(<App/>, document.getElementById("root"))
export default App;
