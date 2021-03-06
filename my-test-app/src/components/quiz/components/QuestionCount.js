import React from 'react';
import PropTypes from 'prop-types'
// responsible for displaying the "show result" link at the end of the quiz
function QuestionCount(props) {

  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
       {props.counter === props.total ? (<div><a className="result-link" href="" onClick={props.viewreults}>View Results</a></div>) : (<div></div>)}
    </div>
  );

}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
