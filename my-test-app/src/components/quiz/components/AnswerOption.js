import React from 'react';
import { makeStyles, withStyles, createMuiTheme} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { purple, green } from '@material-ui/core/colors';
import ToggleButton from "@material-ui/lab/ToggleButton";
import { ThemeProvider } from '@material-ui/styles';
//import { createMuiTheme } from '@material-ui/core/styles';


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

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
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false);
  return (
    <React.Fragment>
    <li className="answerOption">
      {/* <button id="horizontal-list"
        type="button"
        value={props.index}
        className={(props.selectedAnswer === props.index) ? 'selected-btn' : '' }
        onClick={props.onAnswerSelected.bind(props, '1')}
      >{props.answerContent}</button> */}
          <ThemeProvider theme={theme}>
    <Button 
    color = {(props.selectedAnswer === props.index) ? "secondary" : "primary"}
    variant="contained" 
    value={props.index}
    type="button"
    component="span" 
    disableRipple
    className={(props.selectedAnswer === props.index) ? 'selected-btn' : ''}
    onClick={()=>props.onAnswerSelected(props, props.index)}
    >
      {props.answerContent}
      {/* {props.index} */}
    </Button>
    </ThemeProvider>
    </li>
    </React.Fragment>
    
  );

}

export default AnswerOption;
