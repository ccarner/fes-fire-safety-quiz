import React from 'react';

class Result extends React.Component {
  constructor(props){
    super(props);
  }
  renderQuestions(ticks){
    
     
    
    return  this.props.quizQuestions.map((_data,index) =>{
      var solutionmessage = [];
      var correct = false;
      for(var i=0; i<_data.answerindex.length; i++){
        solutionmessage.push(_data.answers[_data.answerindex[i]-1]);
        solutionmessage.push("; ")
      }
      var answermessage = [];
      if(this.props.answers[index] !== undefined){
        var answers = Array.from(this.props.answers[index]);
        for (var i=0; i<answers.length; i++){
          answermessage.push(_data.answers[answers[i]]);
          answermessage.push("; ");
        }
      }
      if(ticks[index]===1){
        correct = true;
      }
    
        // return <div className="list-grp">{_data.question} <br/>Correct answer: {_data.answers[_data.answerindex[0]-1]}. &nbsp; Your answer: {_data.answers[this.props.answers[index][0]]}. &nbsp;&nbsp;&nbsp;  { ((this.props.answers[index][0]+1) === _data.answerindex[0]) ? (<span className="correct-status">Correct</span>) : (<span className="incorrect-status">Incorrect</span>)}</div>
        return <div className="list-grp"><span className="question-text">{_data.question}</span><br/><span className ="correct-status">Correct answer: {solutionmessage} </span><br/><span className = {correct?"correct-status":"incorrect-status"}>Your answer: {answermessage}</span>
           &nbsp; </div>

      }
      )
  }

  

  render (){
 
    var total = this.props.quizQuestions.length;
    var ticks = [];

    
    function eqSet(as, bs){
      if ((as === undefined || bs ===undefined) || as.size !== bs.size) return false;
      for (var a of as) if (!bs.has(a)) return false;
      return true;
    }
    
    for (var i = 0; i < total; i++) { 
      //var solutions = [...this.props.quizQuestions[i].answerindex];
      var solutions = (this.props.quizQuestions[i].answerindex).slice(0);
      for (var j = 0; j<solutions.length; j++){
        solutions[j]-=1;
      }
      var solution_set =  new Set(solutions);
      if (eqSet(this.props.answers[i], solution_set) ){
        ticks.push(1);
        
      }else{
        ticks.push(0);
      }

    }
    
    return (
    <div  className="quiz-story">
      <div>
        <b>Results</b>
        <div>{this.renderQuestions(ticks)}</div>
        {/* <div>{display_arr}</div> */}
      <div>Your overall score: {ticks.reduce((a, b) => a + b, 0)}/{total}</div>


     
         
 
      </div>
    </div>
    )
  }
}

export default Result;
