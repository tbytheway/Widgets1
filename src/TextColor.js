import React from 'react'

export default class TextColor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "black"
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ color: event.target.value })
    
  }

  render() {
    return(
      <div>
      <h3 style={{color:this.state.color}}>{this.state.color}</h3>
      <input type="textarea" 
          name="textValue"
          onChange={this.handleChange}
        />
</div>
    )
  }
  
}