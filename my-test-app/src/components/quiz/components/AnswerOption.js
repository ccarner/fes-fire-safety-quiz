import React from 'react';
import { makeStyles, withStyles, createMuiTheme} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const theme = createMuiTheme({
  palette: {
    //primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

function AnswerOption(props) {
  var selected = false;
  if(!(typeof props.selectedAnswer == 'undefined')){
     selected = props.selectedAnswer.has(props.index);
  }

  return (
    <li className="answerOption">
      {/* <button id="horizontal-list"
        type="button"
        value={props.index}
        className={(props.selectedAnswer && props.selectedAnswer.has(props.index)) ? 'selected-btn' : '' }
        onClick={props.onAnswerSelected}
      >{props.answerContent}</button> */}
      <ThemeProvider theme={theme}>
    <Button 
    color = {(selected) ? "secondary" : "primary"}
    variant="contained" 
    //value={props.index}
    type="button"
    component="span" 
    disableRipple
    //className={(props.selectedAnswer === props.index) ? 'selected-btn' : ''}
    onClick={()=>props.onAnswerSelected(props, props.index)}
    >
      {props.answerContent}
      {/* {props.index} */}
    </Button>
    </ThemeProvider>
    </li>
  );

}

export default AnswerOption;
