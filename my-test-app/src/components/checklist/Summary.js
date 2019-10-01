import React, { Component } from 'react';
import PopUps from "./contact_FES_Popup";
import PropTypes from 'prop-types';



class Summary extends Component {



  renderSummary() {
    return (
      <div>
        <h3>Your building might not be completely fire safe!</h3>

        <h5>
          Fortunately, Fire Equipment Services (FES) are capable of getting your
          building and personell fire safe.
        </h5>
        <h5> </h5>
        <img style={{ width: 150, height: 100 }} src="https://bit.ly/2lEO3o5" alt='FES_LOGO' />
        <h5>Find out more about FES </h5>
        <h5>services: </h5>
      </div>
    );
  }



  renderSafe() {
    return (
      <div>
        <h3>Your building meet the fire safety standards</h3>

        <h5>
          However, Fire Equipment Services (FES) are still able to make your building safer.
        </h5>
        <h5> </h5>
        <img style={{ width: 150, height: 100 }} src="https://bit.ly/2lEO3o5" alt='FES_LOGO' />
        <h5>Find out more about FES </h5>
        <h5>services: </h5>
      </div>
    );
  }

  render() {


    if (this.props.isSafe) {
      return (
        <div>
          <div>
            <h1>Congradulations!</h1>
            <div>{this.renderSafe()}</div>
            < PopUps ></PopUps>
          </div>
        </div >
      )
    } else {

      return (
        <div>
          <div>
            <h1>Summary</h1>
            <div>{this.renderSummary()}</div>
            < PopUps ></PopUps>
          </div>
        </div >
      );
    }
  }
}

Summary.propTypes = {
  isSafe: PropTypes.object.isRequired
}

export default Summary;
