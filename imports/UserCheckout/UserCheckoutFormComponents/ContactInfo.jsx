import React from "react";

export default class ContactInfo extends React.Component {
	getData(e) {
		var email = this.refs.email.value.trim();
		var telephone = Number(this.refs.telephone.value.trim());
		this.props.passContactInfo(email, telephone);
	}

	render() {
		return (
			<div className="fields">
				<div className="two fields">
					<div className="field">
						<label id="formText">E-mail</label>
						<input
							onChange={this.getData.bind(this)}
							ref="email"
							type="text"
							name="E-mail"
							placeholder="E-mail"
						/>
					</div>
					<div className="field">
						<label id="formText">Telephone</label>
						<input
							onChange={this.getData.bind(this)}
							ref="telephone"
							type="text"
							name="Telephone"
							placeholder="Telephone"
						/>
					</div>
				</div>
			</div>
		);
	}
}
