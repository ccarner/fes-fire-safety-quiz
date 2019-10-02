import React, { Component } from "react";
import Button from '@material-ui/core/Button'

class InformationPage extends Component {
  state = {};
  render() {
    return (<React.Fragment>
      <h1>information page</h1>
      <div><b>Click this button to be redirected to the FES website!</b></div>
      <Button variant="contained"
        onClick={() => window.location.assign('https://www.fes.com.au/www/')}>TO FES</Button>
    </React.Fragment>
    )
  }
}

export default InformationPage;
