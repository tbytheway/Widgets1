import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

    increment() {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (

   <div>
    <h1>{this.state.count}</h1>
   <button onClick={(e) => this.increment(e)}>Add</button>
    <button onClick={(e) => this.decrement(e)}>Sub</button>
  </div>
    );
  }
};