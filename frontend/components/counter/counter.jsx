import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    let start = this.state.count;
    if (start > 1) {
      start = start * 2;
    } else {
      start++;
    }
    this.setState({count: start});
  }

  render() {
    return (
      <div className="counter-main" >
        <h2>Count: {this.state.count} </h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
