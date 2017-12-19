import React from "react";

export default props => {
	return (
		<div className="field">
			<label id="formText">First Name</label>
			<input
				onChange={e => props.passFirstName(e.target.value)}
				type="text"
				name="name"
				placeholder={props.firstName}
			/>
		</div>
	);
};

// import React from "react";

// export default class EditOrganiser extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		debugger;
// 		this.state = {
// 			firstName: props.firstName,
// 			secondName: props.secondName
// 		};
// 	}

// 	getData(e) {
// 		var firstName = this.refs.firstName.value.trim();
// 		var lastName = this.refs.lastName.value.trim();
// 		debugger;
// 		this.props.passOrganiser(firstName, lastName);
// 	}

// 	render() {
// 		return (
// 			<div className="two fields">
// 				<div className="field">
// 					<label id="formText">First Name</label>
// 					<input
// 						onChange={this.getData.bind(this)}
// 						ref="firstName"
// 						type="text"
// 						name="first name"
// 						placeholder={this.state.firstName}
// 					/>
// 				</div>
// 				<div className="field">
// 					<label id="formText">Last Name</label>
// 					<input
// 						onChange={this.getData.bind(this)}
// 						ref="lastName"
// 						type="text"
// 						name="first name"
// 						placeholder={this.state.secondName}
// 					/>
// 				</div>
// 			</div>
// 		);
// 	}
// }
