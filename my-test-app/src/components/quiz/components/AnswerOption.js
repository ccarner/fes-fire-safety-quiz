import React from "react";
import {
  makeStyles,
  withStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  selectedButton: {
    backgroundColor: "orange",
    textTransform: "none",
    display: "block",
    color: "white"
  },
  unselectedButton: {
    backgroundColor: "red",
    textTransform: "none",
    display: "block",
    color: "white"
  }
}));

/**
 * responsible for displaying the answer options for a particular quiz question
 */
function AnswerOption(props) {
  const classes = useStyles();

  var selected = false;
  if (!(typeof props.selectedAnswer == "undefined")) {
    selected = props.selectedAnswer.has(props.index);
    console.log(selected);
  }
  let styleClass;
  if (selected) {
    styleClass = classes.selectedButton;
  } else {
    styleClass = classes.unselectedButton;
  }

  return (
    <React.Fragment>
      <div className="answerOption">
        <Button
          variant="contained"
          //value={props.index}
          type="button"
          className={styleClass}
          // style={selected ? styleSelected : styleUnselected}
          component="span"
          //className={(props.selectedAnswer === props.index) ? 'selected-btn' : ''}
          onClick={() => props.onAnswerSelected(props, props.index)}
        >
          {props.answerContent}
        </Button>
      </div>
    </React.Fragment>
  );
}

export default AnswerOption;
