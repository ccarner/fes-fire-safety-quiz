import React, { Component } from "react";
import QuizService from "./quizService";
import QuestionBox from "./questionBox";
import Result from "./result";
import ReactDOM from "react-dom"
import "./../assets/style.css";
// just copypasted carys thingy

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
                this.state.questionBank.map(({question, media_type, media_src, answers, correct, questionId}) =>
                (<QuestionBox
                question ={question}
                options={answers}
                key={questionId}
                media_type = {media_type}
                media_src = {media_src}
                selected = {answer=> this.computeAnswer(answer,correct)}
                   />))}
                {this.state.responses === 5 ? (<Result score={this.state.score} 
                    playAgain={this.playAgain}/>):null}
            </div>
        );
    }
}

ReactDOM.render(<QuizBee/>, document.getElementById("root"))
export default QuizBee;
