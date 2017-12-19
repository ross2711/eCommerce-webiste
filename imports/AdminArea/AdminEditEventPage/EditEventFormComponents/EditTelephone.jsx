import React from "react";

export default props => {
	return (
		<div className="field">
			<label id="formText">Telephone</label>
			<input
				onChange={e => props.passTelephone(e.target.value)}
				type="number"
				name="telephone"
				placeholder={props.telephone}
			/>
		</div>
	);
};
