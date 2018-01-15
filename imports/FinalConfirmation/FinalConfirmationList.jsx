import React from "react";
import FinalConfirmationItem from "./FinalConfirmationItem";

export default class FinalConfirmationList extends React.Component {
	render() {
		var obj = this.props.final[0];
		debugger;
		return (
			<div>
				<FinalConfirmationItem
					id={obj._id}
					firstName={obj.buyer.firstName}
					lastName={obj.buyer.lastName}
					email={obj.buyer.email}
					telephone={obj.buyer.telephone}
					number={obj.buyer.number}
					address={obj.buyer.address}
					city={obj.buyer.city}
				/>
			</div>
		);
	}
}

