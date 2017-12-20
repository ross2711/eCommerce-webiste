import React from "react";
// import { Link } from "react-router-dom";
import {
	Button,
	Form,
	Icon,
	Message,
	Dropdown,
	Component
} from "semantic-ui-react";

import Address from "./FastPayCheckoutFormComponents/Address";
import Buyer from "./FastPayCheckoutFormComponents/Buyer";
import ContactInfo from "./FastPayCheckoutFormComponents/ContactInfo";
import Description from "./FastPayCheckoutFormComponents/Description";
import Terms from "./FastPayCheckoutFormComponents/Terms";
import SubmitBtn from "./FastPayCheckoutFormComponents/SubmitBtn";
import { Cart } from "/imports/api/Cart";
import { Events } from "../api/events";

export default class CheckoutForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buyer: {
				firstName: "",
				lastName: "",
				email: "",
				telephone: "",
				number: "",
				address: "",
				city: ""
			}
		};
		// this.handleSubmit = this.handleSubmit.bind(this);
		// this.getData = this.getData.bind(this);
	}

	// setEventData(key, value) {
	// 	const newBuyer = { ...this.state.buyer, [key]: value };
	// 	this.setState({ buyer: newBuyer });
	// }

	passBuyer(firstName, lastName) {
		debugger;
		const newBuyer = { ...this.state.buyer, firstName, lastName };
		this.setState({ buyer: newBuyer });
	}

	passContactInfo(email, telephone) {
		const newBuyer = { ...this.state.buyer, email, telephone };
		this.setState({ buyer: newBuyer });
	}

	passAddressData(number, address, city) {
		const newBuyer = { ...this.state.buyer, number, address, city };
		this.setState({ buyer: newBuyer });
	}

	// this.props.passData(number, address, city);
	// createEvent(e) {
	//   e.preventDefault();

	//   const event = this.state;
	//   debugger;
	//   // const event = { title: "first event", on: new Date() };
	//   Meteor.call("eventCreate", event, (err, eventId) => {
	//     if (!err) console.log("new event was created with _id", eventId);
	//     debugger;
	//   });
	// }

	handleSubmit(event) {
		event.preventDefault();
		debugger;
		// var purchaser = {
		// 	firstName: this.state.firstName
		// };
		var cart = Cart.find({}).fetch()[0];
		debugger;
		Cart.update({ _id: cart._id }, { $set: { buyer: this.state.buyer } });
		debugger;
		// Cart.update({ event: this.props.id }, { $inc: { quantity: -1 } });
	}

	// handleSubmit(event) {
	// 	event.preventDefault();
	// 	debugger;
	// 	var purchaser = {
	// 		firstName: this.state.firstName
	// 	};
	// 	var cart = Cart.find({}).fetch()[0];
	// 	debugger;
	// 	Cart.update({ _id: cart._id }, { $set: { buyer: purchaser } });
	// }

	render() {
		return (
			<div className="ui container" id="regForm">
				<Message
					id="adminRegFormTitle"
					attached
					header="Welcome to Ticead Alba Fast Pay Checkout"
					content="To process your payment as soon as possible, please fill in your details below"
				/>

				<form
					onSubmit={this.handleSubmit.bind(this)}
					className="ui huge form"
					id="personalInfo"
				>
					<h3 id="formText" className="ui inverted dividing header">
						Your Details
					</h3>

					<Buyer passBuyer={this.passBuyer.bind(this)} />

					<h3 id="formText" className="ui inverted dividing header">
						Contact Info
					</h3>

					<ContactInfo
						passContactInfo={this.passContactInfo.bind(this)}
					/>

					<h3 id="formText" className="ui inverted dividing header">
						Address
					</h3>
					<label id="formText">Address</label>
					<Address
						passAddressData={this.passAddressData.bind(this)}
					/>

					{/*<h3 id="formText" className="ui inverted dividing header">
						Additional details
					</h3>
					<Description
						passDescription={this.setEventData.bind(
							this,
							"description"
						)}
					/>*/}

					<h3 id="formText" className="ui inverted dividing header" />

					<div className="field">
						<div className="field">
							{/*<Terms />*/}

							<Button primary floated="right">
								press
							</Button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

// onClick={this.handleSubmit.bind(this)}
