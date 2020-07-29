import React from 'react'

export default class Greeting extends React.Component {
	state = {
		shown: 'Howdy',
	};
		
	render() {		
		return (
			<div>
				<h2>{this.state.shown ? "Howdy" : "Goodbye"}</h2>
				<button onClick={() => this.setState({ shown: !this.state.shown })}>{this.state.shown ? "Howdy" : "Goodbye"}</button>
			</div>
		)
	}
}
