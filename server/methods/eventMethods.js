import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { _ } from "meteor/underscore";
import { Events } from "/imports/api/events";

Meteor.methods({
	eventCreate(eventData) {
		// validate that eventData is ok for insert
		// returns a string _id from the db
		console.log("============== user id", this.userId);
		check(this.userId, String);
		debugger;
		console.log("*****************event data", eventData);
		debugger;
		return Events.insert({ ...eventData, admin: this.userId });
	},
	eventUpdate(eventData) {
		// expecting eventData in this format: eventData = { _id: 'asdfadsf', title: 'new title',  }
		// _.omit(eventData, '_id') = { title: 'new tittle' }
		check(this.userId, String);
		const event = Events.findOne(eventData._id);
		if (eventData.admin == event.admin) {
			return Events.update(eventData._id, {
				$set: _.omit(eventData, "_id")
			});
		}
	},
	eventTicketDecrease(cart) {
		console.log("=========================**************(((())))))", cart);
		var x;
		cart.map(event => {
			console.log("(((((- | - )))))", event);
			Events.update(
				{ _id: event.event },
				{ $inc: { tickets: -event.quantity } }
			);
		});
	}
});
