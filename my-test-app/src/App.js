import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InformationPage from "./components/information";
import NavBar from "./components/navbar";
import QuizPage from "./components/quizzes";
import HomePage from "./components/home";
import SafetyPage from "./components/safetyHome";
import CheckListPage from "./components/buildingCheck";
import InfoModulePage from "./components/infoModule";
import Module from "./components/infoModules/module";

// import background1 from "./components/pictures/questionmarks.png";

// this is the basic component that's responsible for rendering the default
// starting view with the spinning react logo

// babel can take this JSX (markup+js) into traditional JS for browsers
// components will always use JSX, and then babel turns that into react.createelement staements
//

function App() {
  return (
    <BrowserRouter basename="/app">
      <div className="App">
        <NavBar />
        <Switch>
          {/* use a switch so we only render max of ONE of these pages */}
          <Route path="/" exact component={HomePage} />
          <Route path="/information" exact component={InformationPage} />
          <Route path="/quizzes" exact component={QuizPage} />
          <Route path="/safetyHome" exact component={SafetyPage} />
          <Route path="/buildingCheck" exact component={CheckListPage} />
          <Route path="/infoModule" exact component={InfoModulePage} />
          <Route path="/informationModule" exact component={Module} />
          {/* <Route
            path="/api/quizzes"
            component={() => (window.location = "localhost:5000/api/quizzes")}
          /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
