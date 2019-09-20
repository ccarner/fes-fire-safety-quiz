import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";


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
      
    <BootstrapButton 
    color = {selected ? "primary" : "secondary"}
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
    </BootstrapButton>
    
    {/* <ToggleButton
      value={props.index}
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      {props.answerContent}
    </ToggleButton> */}
    </li>
    </React.Fragment>
    
  );

}

export default AnswerOption;
