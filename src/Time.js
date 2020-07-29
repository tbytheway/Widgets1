import React from "react";

export default class Time extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    // setInterval(() => this.setState(this.state), 1000);
    this.time = setInterval(this.time, 1000)
  }

  render() {
    return (
      <div>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}
