import React, { Component, Link} from "react";
import Button from '@material-ui/core/Button'
import homepage from './pictures/homepage.png'
import check1 from './pictures/check1.png'
import check2 from './pictures/check2.png'

class InformationPage extends Component {
  state = {};
  render() {
    return (<React.Fragment>
    <h1>How to use this app</h1>
    <div><b>INSERT DIAGRAM EXPLAINING USE HERE</b></div>
    {/* <Button variant="contained"
    onClick = {() => window.location.assign('https://www.fes.com.au/www/')}>TO FES</Button> */}
    <h1 id="S1">HOMEPAGE</h1>
    <img src= {homepage} alt="Fire" class="quizImage"/>
    <h1 id="buildingCheck">CHECKLIST</h1>
    <img src= {check1} alt="Fire" class="quizImage"/>

    </React.Fragment>
    )
  }
}

export default InformationPage;
