import React from "react";
import { Accounts } from "meteor/accounts-base";

export default class Login extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		let email = this.refs.email.value.trim();
		let pass = this.refs.pass.value.trim();
		Meteor.loginWithPassword({ email }, pass);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input ref="email" />
				<input ref="pass" />
				<button>login</button>
			</form>
		);
	}
}
