import React from "react";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Homepage = () => {
  return (<div>
    <h1>Homepage</h1>
    <button className="square" onClick={function() { alert('click'); }}>
    checklist
    </button> 
    <button>
      
      more info
      </button>
    <Button variant="contained" color="primary" component = {Link} to="./Quizzes">
       test quizzes
    </Button>
  </div>);
};

export default Homepage;
