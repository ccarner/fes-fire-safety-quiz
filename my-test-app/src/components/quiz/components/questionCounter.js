import React from "react";
import PropTypes from "prop-types";
// responsible for displaying the "show result" link at the end of the quiz
function QuestionCount(props) {
  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
}
//adding this comment so that git recognises filename change
QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;