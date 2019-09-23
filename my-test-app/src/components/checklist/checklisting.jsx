import React, { Component, Fragment } from "react";
import CheckListAPI from "./checklist_questions";
import Check_Format from "./check_list_format";
import Summary from "./Summary";

import ReactDOM from "react-dom";
// import "./checkComponent.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checklistBank: [],
      questionTotal: CheckListAPI.length,
      summaryOn: false
    };
  }

  getQuestions = () => {
    CheckListAPI().then(question => {
      this.setState({
        checklistBank: question
      });
    });
  };


  renderSummary() {
    this.setState(
      {
        summaryOn: true
      }
    );
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    if (this.state.summaryOn === false) {
      return (
        <Fragment>
          <div className="App">
            {this.state.checklistBank.map(
              ({ question, media, media_src }) => (
                <Check_Format question={question} media={media} media_src={media_src} />
              )
            )}
          </div>
          <div>
            <button type="button" className="summary-btn" onClick={() => this.renderSummary()}>See Feedback</button>
          </div>
        </Fragment>
      );
    } else {
      return (
        < Summary />
      );
    }
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
