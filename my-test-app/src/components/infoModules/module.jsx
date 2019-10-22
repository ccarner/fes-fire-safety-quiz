import React, { Component } from "react";
import ReactDOM from "react-dom";
//import fs from 'fs'
// import testtext from './test.txt'
//import htmlfile from './intro_to_fire_safety.html'
// var fs = require('fs')
import { Paper } from "@material-ui/core";

// const testtext = fs.readFile('./test.txt')

class Module extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlstring: this.props.htmlstring
    };
    this.createMarkup = this.createMarkup.bind(this);
    // this.props.htmlstring=this.props.htmlstring.bind(this)
    //this.handleDelete = this.handleDelete.bind(this)
  }
  createMarkup(htmlstring) {
    return { __html: htmlstring };
  }

  state = {};
  render() {
    //alert(this.props.htmlstring)
    //function createMarkup() { return {__html: '<b> ＦＩＲＥ　is dangerous!!!'}; };
    // function createMarkup() { return {__html: this.state.htmlstring}; };
    //console.log(testtext)
    return (
      <React.Fragment>
        <Paper style={{ padding: 8, margin: 8 }}>
          <div
            dangerouslySetInnerHTML={this.createMarkup(this.state.htmlstring)}
          />
        </Paper>
      </React.Fragment>
    );
  }
}

export default Module;
