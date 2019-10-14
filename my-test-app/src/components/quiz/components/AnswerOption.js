import React from 'react';
import { makeStyles, withStyles, createMuiTheme} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { purple, green } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
//import { createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  label: {
    textTransform: 'none',
  },
}));

const theme = createMuiTheme({
  palette: {
    //primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#fcfc4c' }, // This is just green.A700 as hex.
  },
});

/**
 * responsible for displaying the answer options for a particular quiz question
 */
function AnswerOption(props) {
  const classes = useStyles();

  var selected = false;
  if(!(typeof props.selectedAnswer == 'undefined')){
     selected = props.selectedAnswer.has(props.index);
  }
  const style = {display: "block"};
  return (
    
    <React.Fragment>

    <div className="answerOption">
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
        text_transform= "none"
        //value={props.index}
        type="button"
        style = {style}
        component="span" 
        disableRipple
        classes = {{
          label: classes.label,
        }}
        //className={(props.selectedAnswer === props.index) ? 'selected-btn' : ''}
        onClick={()=>props.onAnswerSelected(props, props.index)}
        >
          {props.answerContent}
          {/* {props.index} */}
        </Button>
      </ThemeProvider>
    </div>
    </React.Fragment>

  );

}

export default AnswerOption;
