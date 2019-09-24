import React from 'react';
import Question from '../components/Question';
import Button from "@material-ui/core/Button";

import QuestionCount from '../components/QuestionCount';

import AnswerOption from '../components/AnswerOption';

function Quiz(props) {

  function renderAnswerOptions(key,index) {
    return (
      <AnswerOption
        index ={index}
        key={key.content}
        answerContent={key}
        //answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        selectedAnswer={props.selectedAnswer}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }


  return (
      <div key={props.questionId} className="quiz-story">
        <QuestionCount counter={props.counter} viewreults={props.viewreults}
          counter={props.questionId}
          total={props.questionTotal}
        />
        <div className = "Media">
          {props.media === "text"?<br/>:(props.media === "img"?<div className="media"><img 
            src={props.media_src} alt="picture" width="200" height="200" className ="quizImage"/></div>:
            <div><video src={props.media_src} type="video/mp4" controls className ="quizVideo"/></div>)}
        </div>
        <Question  content={props.question} />
        <div>
        <div className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </div>
        </div>
        <div className="bottom-footer" >
          {props.counter > 0 ? (<Button variant='outlined' className="Previous-btn" onClick={props.setPreviousQuestion} >Previous</Button>) : (<div></div>)}

          {props.counter < props.questionTotal-1 ? (<Button variant='outlined' className="next-btn" onClick={props.setNextQuestion} >Next</Button>) : (<div></div>)}

      </div>
      </div>
  );
}


export default Quiz;
