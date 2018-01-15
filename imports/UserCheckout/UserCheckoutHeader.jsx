import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class UserCheckoutHeader extends React.Component {
	render() {
		return (
			<div className="ui grid" id="headerCreateNewEvent">
				<div className="one wide center aligned column" />
				<div className="two wide center aligned column" />
				<div className="one wide center aligned column" />
				<div className="eight wide center aligned column" />
				<Link to={"/confirmation"}>
					<Button
						className="ui large fluid green button"
						type="submit"
					>
						Confirm and Proceed to Payment
					</Button>
				</Link>
				<div
					className="four wide center aligned column"
					id="dropTrigCreateEvent"
				/>
			</div>
		);
	}
}
