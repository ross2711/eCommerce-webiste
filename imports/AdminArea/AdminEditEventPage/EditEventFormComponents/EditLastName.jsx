import React from "react";

export default props => {
	return (
		<div className="field">
			<label id="formText">Last Name</label>
			<input
				onChange={e => props.passLastName(e.target.value)}
				type="text"
				name="name"
				placeholder={props.lastName}
			/>
		</div>
	);
};
