import React from "react";

export default props => {
	return (
		<div className="four wide field">
			<input
				onChange={e => props.passCity(e.target.value)}
				type="text"
				name="city"
				placeholder={props.city}
			/>
		</div>
	);
};
