import { Meteor } from "meteor/meteor";
import { Countries } from "../imports/api/countries";
import { Events } from "../imports/api/events";

Meteor.startup(() => {
	// code to run on server at startup
	Accounts.config({
		forbidClientAccountCreation: true
	});

	Cloudinary.config({
		cloud_name: "db8xttzan",
		api_key: "599451439769524",
		api_secret: "s-2BqPTqlgTcFruY1hUBw-lJnaw"
	});
});
