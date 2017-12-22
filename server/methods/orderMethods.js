import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { _ } from "meteor/underscore";
import { Orders } from "/imports/api/orders";
// import { CartStorage } from "../../imports/api/cartStorage";

Meteor.methods({
	orderCreate(orderData) {
		// validate that orderData is ok for insert
		/*
    check(orderData, {
      title: String,
      location: [Number, Number],
      on: Date
    });
    */
		// returns a string _id from the db
		console.log("============== user id", this.userId);
		if (this.userId) {
			orderData = { ...orderData, userId: this.usersId };
		}
		return Orders.insert(orderData);
	}
});

// Meteor.call('eventCreate', eventData, (err, res) => {
//   if (!err)
//     history.push('/');
// })

// Meteor.loginWithPassword({email}, pass, (err) => {
//   if (!err) {
//     history.push('/admin/area');
//   } else {
//     alert("Invalid LoginCredentials");
//   }
// });
