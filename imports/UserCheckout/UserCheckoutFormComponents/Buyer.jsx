import React from "react";

export default class Buyer extends React.Component {
	getData(e) {
		var firstName = this.refs.firstName.value.trim();
		var lastName = this.refs.lastName.value.trim();
		debugger;
		this.props.passBuyer(firstName, lastName);
	}

	render() {
		debugger;
		return (
			<div className="two fields">
				<div className="field">
					<label id="formText">First Name</label>
					<input
						onChange={this.getData.bind(this)}
						ref="firstName"
						type="text"
						name="first name"
						placeholder="First Name"
					/>
				</div>
				<div className="field">
					<label id="formText">Last Name</label>
					<input
						onChange={this.getData.bind(this)}
						ref="lastName"
						type="text"
						name="first name"
						placeholder="Last Name"
					/>
				</div>
			</div>
		);
	}
}
