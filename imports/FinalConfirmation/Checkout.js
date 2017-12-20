import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default class Checkout extends React.Component {
	onToken(token) {
		var that = this;
		Meteor.call(
			"StripeChargeMethod",
			token,
			that.props.amount,
			that.props.email,
			//all arguments be
			//amount,
			//arg 2,
			(err, data) => {
				if (err) {
					debugger;
					//as always place a debugger here so that you can see what the error is
					this.handleError(err);
				} else if (data) {
					debugger;
					//debugger to check the data
					if (data.status == "succeeded") {
						//this.handleSuccess(data);
						debugger;
					} else if (data.type == "StripeInvalidRequestError") {
						//this.handleError(data);
						debugger;
					}
				}
			}
		);
	}

	render() {
		return (
			<div>
				<StripeCheckout
					token={this.onToken.bind(this)}
					stripeKey="pk_test_1A3bozgEDEjkmI5h3J9Nf86l"
					amount={this.props.amount}
					email={this.props.email}
				/>
			</div>
		);
	}
}
