import React from "react";
import { Dropdown } from "semantic-ui-react";

const titleOptions = [
	{ key: "mr", text: "Mr", value: "mr" },
	{ key: "mrs", text: "Mrs", value: "mrs" },
	{ key: "miss", text: "Miss", value: "miss" }
];

const DropdownTitle = () => (
	<Dropdown
		placeholder="Title"
		fluid
		search
		selection
		options={titleOptions}
	/>
);

export default DropdownTitle;
