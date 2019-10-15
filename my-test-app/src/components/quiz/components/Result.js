import React from "react";
import Button from "@material-ui/core/Button";
/**
 * renders elements on the result page consisting of all questions in the quiz,
 *  the user's answers vs the correct answers and the user's overall score .
 */
class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  renderQuestions(ticks) {
    return this.props.quiz_questions.map((_data, index) => {
      var solutionmessage = [];
      var correct = false;
<<<<<<< HEAD
      for (var i = 0; i < _data.answer_index.length; i++) {
        solutionmessage.push(_data.answers[_data.answer_index[i] - 1]);
        solutionmessage.push("; ");
=======
      for(var i=0; i<_data.answer_index.length; i++){
        solutionmessage.push(_data.answers[_data.answer_index[i]-1]);
        solutionmessage.push("; ")
>>>>>>> dde4707111419dd2d609201bfb7f1911c7cd6079
      }
      var answermessage = [];
      if (this.props.answers[index] !== undefined) {
        var answers = Array.from(this.props.answers[index]);
        for (var i = 0; i < answers.length; i++) {
          answermessage.push(_data.answers[answers[i]]);
          answermessage.push("; ");
        }
      }
      if (ticks[index] === 1) {
        correct = true;
      }

      return (
        <div className="list-grp">
          <span className="question-text">{_data.question}</span>
          <br />
          <span className="correct-status">
            Correct answer: {solutionmessage}{" "}
          </span>
          <br />
          <span className={correct ? "correct-status" : "incorrect-status"}>
            Your answer: {answermessage}
          </span>
          &nbsp;{" "}
        </div>
      );
    });
  }

  render() {
    var total = this.props.quiz_questions.length;
    var ticks = [];

    // compares 2 sets for equality
    function eqSet(as, bs) {
      if (as === undefined || bs === undefined || as.size !== bs.size)
        return false;
      for (var a of as) if (!bs.has(a)) return false;
      return true;
    }

    for (var i = 0; i < total; i++) {
      // indices of actual solutions (they start at 1 rather than 0)
<<<<<<< HEAD
      var solutions = this.props.quiz_questions[i].answer_index.slice(0);
      for (var j = 0; j < solutions.length; j++) {
        solutions[j] -= 1;
=======
      var solutions = (this.props.quizQuestions[i].answer_index).slice(0);
      for (var j = 0; j<solutions.length; j++){
        solutions[j]-=1;
>>>>>>> dde4707111419dd2d609201bfb7f1911c7cd6079
      }
      var solution_set = new Set(solutions);
      // compares the user's answers against the solutions
      if (eqSet(this.props.answers[i], solution_set)) {
        ticks.push(1);
      } else {
        ticks.push(0);
      }
    }

    function backToQuizzes() {
      window.location.href = "/quizzes";
    }

    const score_style = { fontSize: "20px" };

    return (
      <div className="quiz-story">
        <div>
          <b>Results</b>
          <div>{this.renderQuestions(ticks)}</div>
          <br />
          <div>
            Your Score : &nbsp;
            <span style={score_style}>
              {" "}
              {ticks.reduce((a, b) => a + b, 0)}/{total}
            </span>
          </div>
          <br />
          <br />
          <div>
            <Button variant="outlined" onClick={backToQuizzes}>
              More quizzes
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
