import React from "react";

export default class Terms extends React.Component {
	render() {
		return (
			<div className="ui inverted checkbox">
				<input type="checkbox" id="terms" />
				<label id="formText" for="terms">
					I agree to the terms and conditions
				</label>
			</div>
		);
	}
}
