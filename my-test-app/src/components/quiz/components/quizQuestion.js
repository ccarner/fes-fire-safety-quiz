import React from "react";

import Typography from "@material-ui/core/Typography";

import AnswerOption from "./AnswerOption";
/**
 * renders the quiz component page when the user is answering a specific quiz question
 */
function Quiz(props) {
  function renderAnswerOptions(key, index) {
    return (
      <AnswerOption
        index={index}
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
    <React.Fragment>
      <div className="Media">
        {props.media === "text" ? (
          <br />
        ) : props.media === "img" ? (
          <div className="media">
            <img
              src={props.media_src}
              alt="Quiz Question"
              width="200"
              height="200"
              className="quizImage"
            />
          </div>
        ) : (
          <div>
            <video
              src={props.media_src}
              type="video/mp4"
              controls
              className="quizVideo"
            />
          </div>
        )}
      </div>
      <div>
        <Typography variant="h5" component="h2">
          {props.question}
        </Typography>
      </div>
      {props.maxChoices > 1 ? (
        <div>
          <br />
          <b>Select at most {props.maxChoices} options</b>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <div className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Quiz;
