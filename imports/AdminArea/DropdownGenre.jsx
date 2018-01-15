import React from "react";
import { Dropdown } from "semantic-ui-react";
// import titleOptions from './titleOptions'

const genreOptions = [
	{ key: "rock", text: "rock", value: "rock" },
	{ key: "pop", text: "pop", value: "pop" },
	{ key: "electronic", text: "electronic", value: "electronic" },
	{ key: "classical", text: "classical", value: "classical" }
];

export default class DropdownGenre extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	getData(e) {
		var genre = e.target.value;
		debugger;
		this.props.passGenre(genre);
	}
	render() {
		return (
			<Dropdown
				placeholder="Title"
				fluid
				search
				selection
				options={genreOptions}
			/>
		);
	}
}
