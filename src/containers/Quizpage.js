import React from "react";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Quizpage = () => {
  return (
  <div>
    <h1>Quizzes go here</h1>
  
  <Button variant="contained" color="primary" component = {Link} to="./">
       home
  </Button>
  </div>
  );
};

export default Quizpage;
