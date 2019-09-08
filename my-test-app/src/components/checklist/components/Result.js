import React from 'react';

class Result extends React.Component {
  constructor(props){
    super(props);
  }
  renderQuestions(){
    return  this.props.quizQuestions.map((_data,index) =>{
        return <div className="list-grp">{_data.question} <br/>Correct answer: {_data.answers[_data.answerindex-1]}. &nbsp; Your answer: {_data.answers[this.props.answers[index]]}. &nbsp;&nbsp;&nbsp;  { ((this.props.answers[index]+1) === _data.answerindex) ? (<span className="correct-status">Correct</span>) : (<span className="incorrect-status">Incorrect</span>)}</div>
    })
  }


  render (){
 
    var total = this.props.quizQuestions.length;
    
    var score = 0;

    for (var i = 0; i < total; i++) { 
      if (this.props.answers[i] == this.props.quizQuestions[i].answerindex-1){
        score += 1;
      }
    }
    
    return (
    <div  className="quiz-story">
      <div>
        <b>Results</b>!
        <div>{this.renderQuestions()}</div>
      <div>Your overall score: {score}/{total}</div>


     
         
 
      </div>
    </div>
    )
  }
}

export default Result;
