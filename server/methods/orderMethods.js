import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { _ } from "meteor/underscore";
import { Orders } from "/imports/api/orders";

Meteor.methods({
	orderCreate(orderData) {
		// validate that orderData is ok for insert
		// returns a string _id from the db
		console.log("============== user id", this.userId);
		if (this.userId) {
			orderData = { ...orderData, userId: this.usersId };
		}
		return Orders.insert(orderData);
	}
});

