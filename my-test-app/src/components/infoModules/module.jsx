import React, { Component } from "react";
import ReactDOM from "react-dom";


class Module extends Component {

  
  state = {};
  render() {
      var st = `<!DOCTYPE html>
      <html>
      <body>
      
      <h1>Intro</h1>
      <p>Fire is dangerous.</p>
      <p>Fire is dangerous.</p>
      <p>Fire is dangerous.</p>
      <p>Fire is dangerous.</p>
      <p>Fire is dangerous.</p>
      <p>Fire is dangerous.</p>
      <p>Fire is dangerous.</p>
      
      </body>
      </html>`;
      function createMarkup() { return {__html: '<b> ＦＩＲＥ　is dangerous!!!'}; };
    return (
      <React.Fragment>
      
    < div dangerouslySetInnerHTML={createMarkup()} />

      </React.Fragment>
    );
  }
}


export default Module;
