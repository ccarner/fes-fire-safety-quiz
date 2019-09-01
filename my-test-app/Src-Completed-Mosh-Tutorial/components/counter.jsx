// using JSX instead of JS for file type = better code completion!
// a controlled component, its parent modifies the data (just raises events)
// just type imrc if have 'simple react snippets' installed
import React, { Component } from "react";

// type 'cc' if have 'simple react snippets' installed

// counter class extends the component class that we imported from React
class counter extends Component {
  // state is a special property that contains any data that a component needs
  //   constructor(props) {
  //     super(props);
  //     // this gives us access to the current object in our event handler,
  //     // by binding 'this' to the current object NOTE this was before making it a 'controlled
  //     // component' ie removing local state, this functionw as in this obejct not in the parent
  //     //this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   another way to define styles... then do style={this.styles} inside tag
  styles = {
    fontSize: "100px",
    fontWeight: "bold"
  };

  render() {
    console.log("props", this.props);
    // NOT a string, uses React.createElement, hwnce need to import React.
    // prettier extension formats the extensions!
    // react.Fragment prevents needing to have 'div's everywhere

    return (
      <React.Fragment>
        {/*
        <img src={this.state.imageURL} alt="" />*/}
        {/* use classname instead of class like normal HTML, since class is
        reserved in JS */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2";
    classes +=
      this.props.counter.value === 0 ? " badge-warning" : " badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default counter;
