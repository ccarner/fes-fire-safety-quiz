import React from 'react';
import Button from "@material-ui/core/Button";


function AnswerOption(props) {

  return (
    <li className="answerOption">
      <Button id="horizontal-list"
        type="button"
        value={props.index}
        className={(props.selectedAnswer === props.index) ? 'selected-btn' : '' }
        onClick={() => this.props.onAnswerSelected}
      >{props.answerContent}</Button>
    </li>
  );

}

export default AnswerOption;
