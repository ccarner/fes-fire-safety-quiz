import React, { Component, Link } from "react";
import Button from '@material-ui/core/Button'
import StandardPaper from "./uiComponents/standardPaper.jsx";
import quizimg from './helpPictures/quizhelp1.png'
import menuimg from './helpPictures/quizlistedited.png'
import popimg from './helpPictures/popupedited.png'
import subimg from './helpPictures/submitquizedited.png'
import checkimg from './helpPictures/checklistedited.png'
import homepage from './pictures/homepage.png'
import check1 from './pictures/check1.png'
//import check2 from './pictures/check2.png'

class InformationPage extends Component {
  state = {};
  render() {
    return (<React.Fragment>
      <StandardPaper>
      <h1>How to use this app</h1>
      <div><b></b></div>
      {/* <h2 id="S1">Homepage</h2>
      <img src={homepage} alt="Fire" class="quizImage" /> */}
      <h2 id="Menu">Quiz and Checklist Menu</h2>
      <img src={menuimg} alt="Fire" class="quizImage" />
      <h2 id="Menu">Popup</h2>
      <img src={popimg} alt="Fire" class="quizImage" />
      <h2 id="Quiz">Quiz</h2>
      <img src={quizimg} alt="Fire" class="quizImage" />
      <h2 id="Submit">Quiz Submission</h2>
      <img src={subimg} alt="Fire" class="quizImage" />
      <h2 id="buildingCheck">checklist</h2>
      <img src={checkimg} alt="Fire" class="quizImage" />
      </StandardPaper>
    </React.Fragment>
    )
  }
}

export default InformationPage;
