import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import { Router, Route } from "react-router";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 2 }, { id: 2, value: 3 }, { id: 3, value: 0 }]
  };

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    // ... means clone
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          counters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
