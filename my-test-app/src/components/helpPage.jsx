import React, { Component, Link} from "react";
import Button from '@material-ui/core/Button'

class InformationPage extends Component {
  state = {};
  render() {
    return (<React.Fragment>
    <h1>How to use this app</h1>
    <div><b>INSERT DIAGRAM EXPLAINING USE HERE</b></div>
    {/* <Button variant="contained"
    onClick = {() => window.location.assign('https://www.fes.com.au/www/')}>TO FES</Button> */}
    </React.Fragment>
    )
  }
}

export default InformationPage;
