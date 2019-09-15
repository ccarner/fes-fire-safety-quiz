import React from "react";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";

function Quiz(props) {
  function renderAnswerOptions(key, index) {
    return (
      <AnswerOption
        index={index}
        //key={key.content}
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
      <QuestionCount
        counter={props.counter}
        viewreults={props.viewreults}
        counter={props.questionId}
        total={props.questionTotal}
      />
      <div className="Media">
        {props.media === "text" ? (
          <br />
        ) : props.media === "img" ? (
          <div className="media">
            <img
              src={props.media_src}
              alt="picture"
              width="200"
              height="200"
              className="quizImage"
            />
          </div>
        ) : (
          <div>
            <video src={props.media_src} type="video/mp4" controls />
          </div>
        )}
      </div>
      <Question content={props.question} />
      <div>
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
      <div className="bottom-footer">
        {props.counter > 0 ? (
          <button className="Previous-btn" onClick={props.setPreviousQuestion}>
            Previous
          </button>
        ) : (
          <div></div>
        )}

        {props.counter < props.questionTotal - 1 ? (
          <button className="next-btn" onClick={props.setNextQuestion}>
            Next
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
