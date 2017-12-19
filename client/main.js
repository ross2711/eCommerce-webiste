import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import { routes } from "../imports/App";

Meteor.startup(() => {
	render(routes(), document.getElementById("app"));
});

$.cloudinary.config({
	cloud_name: "db8xttzan"
});
