import React from "react";
import { Dropdown } from "semantic-ui-react";

const typeOptions = [
	{ key: "type1", text: "type1", value: "type1" },
	{ key: "type2", text: "type2", value: "type2" },
	{ key: "type3", text: "type3", value: "type3" },
	{ key: "type4", text: "type4", value: "type4" }
];

const DropdownType = () => (
	<Dropdown placeholder="Type" fluid search selection options={typeOptions} />
);

export default DropdownType;
