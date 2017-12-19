import React from "react";

export default class Description extends React.Component {
	getData(e) {
		var description = e.target.value;
		debugger;
		this.props.passDescription(description);
	}

	render() {
		return (
			<div class="ui form">
				<div class="field">
					<label id="formText">Details</label>
					<textarea
						onChange={this.getData.bind(this)}
						type="text"
						rows="1"
						placeholder="Please enter a description of the event as you would like it to be seen on the website..."
					/>
				</div>
			</div>
		);
	}
}
