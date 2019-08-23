import React, {Component} from "react";
import ReactDOM from "react-dom"
import "./assets/style.css";
import QuizService from "./QuizService";
import QuestionBox from "./Components/QuestionBox";
import Result from "./Components/Result";

class QuizBee extends Component {
    state = {
        questionBank: [],
        responses: 0,
        score:0
    };
    getQuestions = ()=> {
        QuizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };
    computeAnswer = (answer, correctAnswer) =>{
        if (answer === correctAnswer){
            this.setState({
                score: this.state.score+1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses+1 : 5
        });
    }
    componentDidMount(){
        this.getQuestions();
    }
    playAgain = () =>{
        this.getQuestions();
        this.setState({
            score:0,
            responses:0
        })
    }
    render(){
        return(
            <div className="container">
                <div className="title"> QuiziBee </div>
                {this.state.questionBank.length>0 && 
                this.state.responses < 5 &&
                this.state.questionBank.map(({question, answers, correct, questionId}) =>
                (<QuestionBox
                question ={question}
                options={answers}
                key={questionId}
                selected = {answer=> this.computeAnswer(answer,correct)}
                   />))}
                {this.state.responses === 5 ? (<Result score={this.state.score} 
                    playAgain={this.playAgain}/>):null}
            </div>
        );
    }
}

ReactDOM.render(<QuizBee/>, document.getElementById("root"))