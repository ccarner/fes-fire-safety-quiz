import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InformationPage from "./components/information";
import NavBar from "./components/navbar";
import HomePage from "./components/home";

import helpPage from "./components/helpPage";
import AppBar from "@material-ui/core/AppBar";
import ChecklistSubmissionManager from "./components/new_checklist/checklistSubmissionManager.jsx";
import QuizSubmissionManager from "./components/quiz/quizSubmissionManager.jsx";
import ChecklistSelection from "./components/new_checklist/checklistSelection.jsx";
import ModuleSelection from "./components/infoModules/moduleSelection.jsx";
import ModuleSubmissionManager from "./components/infoModules/moduleSubmissionManager.jsx";
import QuizSelection from "./components/quiz/quizSelection.jsx";
import SettingsPage from "./components/settingsPage.jsx";
// import background1 from "./components/pictures/questionmarks.png";

// babel can take this JSX (markup+js) into traditional JS for browsers
// components will always use JSX, and then babel turns that into react.createelement staements
//

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="appBody" style={{ paddingTop: 50 }}>
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
            <Route path="/help" exact component={helpPage} />
            <Route path="/information" exact component={InformationPage} />
            <Route path="/settings" exact component={SettingsPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
