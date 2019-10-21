import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InformationPage from "./components/information";
import NavBar from "./components/navbar";
import HomePage from "./components/home";
import CheckListPage from "./components/ContentMenu";
import InfoModulePage from "./components/infoModule";
import Module from "./components/infoModules/module";
import helpPage from "./components/helpPage";
import AppBar from "@material-ui/core/AppBar";
import ChecklistSubmissionManager from "./components/new_checklist/checklistSubmissionManager.jsx";
import QuizSubmissionManager from "./components/quiz/quizSubmissionManager.jsx";
import ChecklistSelection from "./components/new_checklist/checklistSelection.jsx";
import ModuleSelection from "./components/infoModules/moduleSelection.jsx";
import ModuleSubmissionManager from "./components/infoModules/moduleSubmissionManager.jsx";
import QuizSelection from "./components/quiz/quizSelection.jsx";
// import background1 from "./components/pictures/questionmarks.png";

// this is the basic component that's responsible for rendering the default
// starting view with the spinning react logo

// babel can take this JSX (markup+js) into traditional JS for browsers
// components will always use JSX, and then babel turns that into react.createelement staements
//

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <AppBar
          position="static"
          style={{ position: "fixed", backgroundColor: "red" }}
        >
          New MaterialUI Navbar
        </AppBar>

        <Switch>
          {/* use a switch so we only render max of ONE of these pages */}
          <Route path="/" exact component={HomePage} />

          <Route path="/quizzes" exact component={QuizSelection} />
          <Route path="/checklists" exact component={ChecklistSelection} />
          <Route path="/modules" exact component={ModuleSelection} />
          <Route
            path="/completeChecklist"
            exact
            render={routeProps => <ChecklistSubmissionManager />}
          />
          <Route
            exact
            path="/completeQuiz"
            render={routeProps => <QuizSubmissionManager />}
          />
          <Route
            path="/completeModule"
            exact
            render={routeProps => <ModuleSubmissionManager />}
          />
          <Route path="/helppage" exact component={helpPage} />
          <Route path="/information" exact component={InformationPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
