import React from 'react'

export default class FontSize extends React.Component {
  constructor() {
    super();

    this.state = {
      fontsize: 20,
      
    }
  }

  increment() {
    this.setState({
      fontsize: this.state.fontsize + 1
    });
  };
  
  decrement() {
    this.setState({
      fontsize: this.state.fontsize - 1
    });
  };

  render() {
    return(
      <div>
        <h3 style={{fontSize:this.state.fontsize}}>{this.state.fontsize}px</h3>
        <button onClick={(e) => this.increment(e)}>Grow</button>
    <button onClick={(e) => this.decrement(e)}>Shrink</button>
      </div>
    )
  }
  
}