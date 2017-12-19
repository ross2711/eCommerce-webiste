import React from "react";

export default props => {
	return (
		<div className="field">
			<label id="formText">Price</label>
			<input
				onChange={e => props.passPrice(e.target.value)}
				type="number"
				name="price"
				placeholder={props.price}
			/>
		</div>
	);
};
