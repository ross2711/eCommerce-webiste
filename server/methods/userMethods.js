import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";

Meteor.methods({
	createUserInServer: function(email, password, profile) {
		console.log(email, password, profile);
		var user = Accounts.createUser({ email, password, profile });
		console.log(user);
	}
});
