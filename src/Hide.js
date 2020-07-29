import React from 'react'

export default class Hide extends React.Component {
	state = {
		show: 'Hello',
	};
		
	render() {		
		return (
			<div>
				<h2>{this.state.shown ? "Hello" : ""}</h2>
				<button onClick={() => this.setState({ shown: !this.state.shown })}>{this.state.shown ? "Hide" : "Show"}</button>
			</div>
		)
	}
}
