import React from "react";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Homepage = () => {
  return (<div>
    <h1>Homepage</h1>
    <Button variant="contained" color="primary" onClick={function() { alert('click'); }} 
    //component = {Link} to="./Quizzes"
    >
    {/* <button className="square" > */}
    checklist
    {/* </button>  */}
    </Button>
    <div>
    <Button variant="contained" color="secondary" onClick={function() { alert('ow'); }}>
      don't click me
      </Button>
      </div>
    <Button variant="contained" color="primary" component = {Link} to="./Quizzes">
       test quizzes
    </Button>
  </div>);
};

export default Homepage;
