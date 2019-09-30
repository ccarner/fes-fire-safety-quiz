// commented.


// import relevent modules
import React, { Component, Fragment } from "react";
import CheckListAPI from "./checklist_questions";
import Check_Format from "./check_list_format";
import Summary from "./Summary";




// Main class starts here
class Checklisting extends Component {

  // setting up the initial states, noting the summary mode is off initially
  constructor(props) {
    super(props);
    this.state = {
      checklistBank: [],
      questionTotal: CheckListAPI.length,
      summaryOn: false
    };
  }


  // ChecklistAPI() automatically formatted the checklists, so this function set the cheklistBank
  // to the checklists we have in the database
  getQuestions = () => {

    CheckListAPI().then((question) => {
      console.log("checklisting 22", question);
      this.setState({
        checklistBank: question
      });
    });
  };



  // If the user choose to see the feedback, summary mode is turned on
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


  // This function renders the checklist page, each checklist question is listed with three options to choose from
  // and there is a button to view the result.
  render() {
    if (this.state.summaryOn === false) {
      return (
        <Fragment>
          <div className="Checklisting">
            {this.state.checklistBank.map(
              ({ question, media, media_src, questionID }) => {
                return (
                  <Check_Format questionID={questionID} question={question} media={media} media_src={media_src} />
                )
              }
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


export default Checklisting;
