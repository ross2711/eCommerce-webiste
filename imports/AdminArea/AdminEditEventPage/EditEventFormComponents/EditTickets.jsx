import React from "react";

export default props => {
	debugger;
	return (
		<div className="field">
			<label id="formText">Tickets</label>
			<input
				onChange={e => props.passTickets(e.target.value)}
				type="number"
				name="tickets"
				placeholder={props.tickets}
			/>
		</div>
	);
};
