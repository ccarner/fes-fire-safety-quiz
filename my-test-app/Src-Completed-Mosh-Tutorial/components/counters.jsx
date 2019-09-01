import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <div>
            <Counter
              counter={counter}
              key={counter.id}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              // saves us having to write a line for EACH property -> state var, eg
              // id={counter.id}, and value={counter.value}, can just say counter={counter}
              // then get them from inside in the calling function
              selected={true}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
