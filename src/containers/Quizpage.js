import React, {Component} from "react";
import ReactDom from "react-dom";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Questiontest from "./Questiontest/Questiontest";

class Quiz extends Component {
  state = {
    questions: []
  };
  getQuest = () => {
    Questiontest().then(question =>
      {this.setState({
        questions : question
      });
    });
  };
  componentDidMount(){
    this.getQuest();
  }
  render(){
    return (
    <div className="container">
      <div className="title">QUEEZ</div>
      {this.state.questions.length > 0 && 
      this.state.questions.map(({question, answers, correct}) => <h4>{question}</h4>)}
    </div>)
  }
}

const Quizpage = () => {
  return (
  <div>
    <h1>Quizzes go here</h1>
  
  <Button variant="contained" color="primary" component = {Link} to="/">
       home
  </Button>
  <div>
  <Route exact={true} path="/Quizzes" render={() =>(
  <Button variant="contained" color="secondary" component = {Link} to="/Quizzes/quiz1">
  quiz1
  </Button> )}>
  </Route>
  </div>
  <Route  path="/Quizzes/quiz1" component={Quiz} />
  </div>
  );
};

export default Quizpage;
