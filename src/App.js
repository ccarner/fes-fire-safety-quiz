import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./containers/Homepage";

function App() {
  //const handlePress = () => false

  return (
    <div className="App">
      <header className="App-header">
        <p>FS-Quoll</p>
      </header>
      <Router>
        <Route component={Homepage} />
        
      </Router>
      <button>
        Quiz
      </button>
      <button>
        Checklist
      </button>
      <button>
        More Info
      </button>
    </div>
  );
}

export default App;
