import React from 'react'

export default class Align extends React.Component {
  constructor() {
    super();

    this.state = {
      align: 'center'
    }
  }

  left() {
    this.setState({
      align: 'left'
    });
  };
  
 right() {
    this.setState({
      align: 'right'
    });
  };
  center() {
    this.setState({
      align: 'center'
    });
  };

  render() {
    return(
      <div>
        <div style={{textAlign: this.state.align}}><h2>Push Me</h2></div>
        <button onClick={(e) => this.left(e)}>Left</button>
        <button onClick={(e) => this.center(e)}>Center</button>
        <button onClick={(e) => this.right(e)}>Right</button>
      </div>
    )
  }
  
}