import React from "react";
import { Link } from "react-router-dom";
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
import history from "../History";

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
	}

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

	handleSubmit(event) {
		event.preventDefault();
		Session.set("buyer", this.state.buyer);
		history.push("/confirmation");
	}

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

					<h3 id="formText" className="ui inverted dividing header" />

					<div className="field">
						<div className="field">
							<Button primary floated="right">
								Proceed to Payment
							</Button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}


