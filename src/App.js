import React from "react";
import logo from "./logo.svg";
import Button from '@material-ui/core/Button';
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./containers/Homepage";
import Quizpage from "./containers/Quizpage";

function App() {
  //const handlePress = () => false
  //button {display: block;}
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <p>FS-Quoll</p>
      
      </header>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/Quizzes" component={Quizpage} />
      <Route exact={true} path="/" render={() => (
      <button className="square" onClick={function() { alert('click'); }}> 
      <Route exact={true} path="/"/>
      checklist
      </button>
      )}/>
      <Route exact={true} path="/" render={() => (
      <button>
      
      more info
      </button>
      )}/>
      <Button variant="contained" color="primary" component = {Link} to="./Quizzes">
       test quizzes
      </Button>
    </div>
    </Router>
  );
}

export default App;
