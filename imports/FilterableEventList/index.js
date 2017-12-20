import React, { Component } from "react";
import Sidebar from "./Sidebar";
import EventList from "./EventList";
import Genre from "./Genre";
import Type from "./Type";
import HeaderEvent from "./Header";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import { Events } from "../api/events";
import { Cart } from "../api/Cart";

export default class FilterableEventList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: []
		};
		debugger;
	}

	componentWillMount() {
		Tracker.autorun(() => {
			var events = Events.find({}).fetch();
			debugger;
			this.setState({ events });
		});
	}
	addToCart(id) {
		//first check if the event is in the cart
		var item = Cart.findOne({ event: id });
		debugger;
		//if it is only update
		//else insert
		if (!item) {
			Cart.insert({ event: id, quantity: 1, buyer: "" }, e => {
				console.log("****error*****", e);
			});
		} else {
			var newQuantity = item.quantity + 1;
			debugger;
			Cart.update(
				{ event: id },
				{ $set: { quantity: newQuantity } },
				e => {
					console.log("********", e, "*********");
				}
			);
		}
	}
	render() {
		return (
			<div>
				<Navbar />

				<Carousel />

				<Sidebar
					events={this.state.events}
					addToCart={this.addToCart}
				/>

				<Footer />
			</div>
		);
	}
}
