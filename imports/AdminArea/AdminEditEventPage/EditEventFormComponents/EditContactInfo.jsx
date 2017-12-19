// import React from "react";

// export default class EditContactInfo extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			email: props.email,
// 			telephone: props.telephone
// 		};
// 	}

// 	getData(e) {
// 		var email = this.refs.email.value.trim();
// 		var telephone = Number(this.refs.telephone.value.trim());
// 		this.props.passContactInfo(email, telephone);
// 	}

// 	render() {
// 		return (
// 			<div className="fields">
// 				<div className="two fields">
// 					<div className="field">
// 						<label id="formText">E-mail</label>
// 						<input
// 							onChange={this.getData.bind(this)}
// 							ref="email"
// 							type="text"
// 							name="E-mail"
// 							placeholder={this.state.email}
// 						/>
// 					</div>
// 					<div className="field">
// 						<label id="formText">Telephone</label>
// 						<input
// 							onChange={this.getData.bind(this)}
// 							ref="telephone"
// 							type="text"
// 							name="Telephone"
// 							placeholder={this.state.telephone}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
