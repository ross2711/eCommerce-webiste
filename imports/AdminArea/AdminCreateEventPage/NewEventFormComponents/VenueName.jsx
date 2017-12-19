import React from "react";

export default class VenueName extends React.Component {
	getData(e) {
		var venueName = e.target.value;
		this.props.passVenueName(venueName);
	}

	render() {
		return (
			<div className="field">
				<input
					onChange={this.getData.bind(this)}
					type="text"
					name="venue"
					placeholder="Enter name of venue"
				/>
			</div>
		);
	}
}
