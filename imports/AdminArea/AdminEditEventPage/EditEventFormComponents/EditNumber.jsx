import React from "react";

export default props => {
	return (
		<div className="four wide field">
			<input
				onChange={e => props.passNumber(e.target.value)}
				type="number"
				name="number"
				placeholder={props.number}
			/>
		</div>
	);
};

// <div className="four wide field">
// 	<input
// 		onChange={this.getData.bind(this)}
// 		ref="number"
// 		type="Number"
// 		name="shipping[address]"
// 		placeholder={this.state.number}
// 	/>
// </div>
