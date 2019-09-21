import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InformationPage from "./components/information";
import NavBar from "./components/navbar";
import QuizPage from "./components/quizzes";
import HomePage from "./components/home";
import SafetyPage from "./components/safetyHome";
import CheckListPage from "./components/buildingCheck";
import InfoModulePage from "./components/infoModule";

// import background1 from "./components/pictures/questionmarks.png";

// this is the basic component that's responsible for rendering the default
// starting view with the spinning react logo

// babel can take this JSX (markup+js) into traditional JS for browsers
// components will always use JSX, and then babel turns that into react.createelement staements
//

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          {/* use a switch so we only render max of ONE of these pages */}
          <Route path="/" exact component={HomePage} />
          <Route path="/information" component={InformationPage} />
          <Route path="/quizzes" component={QuizPage} />
          <Route path="/safetyHome" component={SafetyPage} />
          <Route path="/buildingCheck" component={CheckListPage} />
          <Route path="/infoModule" component={InfoModulePage} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
