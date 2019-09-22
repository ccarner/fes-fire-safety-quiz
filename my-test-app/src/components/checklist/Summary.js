import React from "react";
import PopUps from "./contact_FES_Popup";



class Summary extends React.Component {
  constructor(props) {
    super(props);
  }
  renderSummary() {
    return (
      <div>
        <h3>Your building might not be completely fire safe!</h3>
        <h5>
          Fortunately, Fire Equipment Services (FES) are capable of getting your
          building and personell fire safe.
        </h5>
        <h5> </h5>
        <img style={{ width: 150, height: 100 }} src="https://bit.ly/2lEO3o5" />
        <h5>Find out more about FES </h5>
        <h5>services: </h5>
      </div>
    );
  }

  render() {


    return (
      <div className="quiz-story">
        <div>
          <h1>Summary</h1>
          <div>{this.renderSummary()}</div>


          < PopUps ></PopUps>





        </div>
      </div >
    );
  }
}

export default Summary;
