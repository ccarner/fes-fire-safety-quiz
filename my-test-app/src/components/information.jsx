import React, { Component } from "react";
import PhoneNumber from 'react-phone-number';
import Button from '@material-ui/core/Button'
import FES_MAP from './pictures/FES_Map_Location.png'

//displays a page with contact information for FES 
class InformationPage extends Component {
  state = {};
  render() {

    return (<React.Fragment>
      <h1>Information page</h1>

      <div>
        <img style={{ width: 300, height: 200 }} src={FES_MAP} alt='FES_MAP'
          onClick={() => window.location.assign('https://bit.ly/2M9suXt')} />
      </div>
      {/* <div><b>Click this button to be redirected to the FES website!</b></div> */}


      <div>
        Website: {"     "}
        <Button variant="contained"
          //upon clicking, redirects to the FES website
          onClick={() => window.location.assign('https://www.fes.com.au/www/')}>TO FES</Button>
      </div>

      <div>

        Phone: {"     "}
        {/* {<PhoneNumber number = "1300 855 163" isLinked = {true}/>}  */}
        <Button variant="contained" component={PhoneNumber} number="1300 855 163" isLinked={true}></Button>
        <h3> </h3>
        Address:    2/5 Lakeside Dr, Burwood East VIC 3151</div>
    </React.Fragment>
    )
  }
}

export default InformationPage;
