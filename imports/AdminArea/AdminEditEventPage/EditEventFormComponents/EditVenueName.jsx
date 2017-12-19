import React from "react";

export default props => {
	return (
		<div className="ui form">
			<label id="formText">Current Venue</label>
			<div className="field">
				<input
					onChange={e => props.passVenueName(e.target.value)}
					type="text"
					name="venue name"
					placeholder={props.venueName}
				/>
			</div>
		</div>
	);
};

// import React from "react";

// export default class EditVenueName extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		debugger;
// 		this.state = {
// 			venueName: props.venueName
// 		};
// 	}

// 	getData(e) {
// 		var venueName = e.target.value;
// 		this.props.passVenueName(venueName);
// 	}

// 	render() {
// 		return (
// 			<div className="field">
// 				<input
// 					onChange={this.getData.bind(this)}
// 					type="text"
// 					name="venue"
// 					placeholder={this.state.venueName}
// 				/>
// 			</div>
// 		);
// 	}
// }
