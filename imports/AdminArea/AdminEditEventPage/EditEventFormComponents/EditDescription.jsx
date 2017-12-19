import React from "react";

export default props => {
	return (
		<div className="ui form">
			<label id="formText">Description</label>
			<div className="field">
				<input
					onChange={e => props.passDescription(e.target.value)}
					type="text"
					name="description"
					placeholder={props.description}
				/>
			</div>
		</div>
	);
};

// import React from "react";

// export default class EditDescription extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			description: props.description
// 		};
// 	}

// 	getData(e) {
// 		var description = e.target.value;
// 		debugger;
// 		this.props.passDescription(description);
// 	}

// 	render() {
// 		return (
// 			<div class="ui form">
// 				<div class="field">
// 					<label id="formText">Details</label>
// 					<textarea
// 						onChange={this.getData.bind(this)}
// 						type="text"
// 						rows="1"
// 						placeholder={this.state.description}
// 					/>
// 				</div>
// 			</div>
// 		);
// 	}
// }
