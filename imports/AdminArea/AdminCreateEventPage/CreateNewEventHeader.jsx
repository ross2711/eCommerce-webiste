import React from "react";
import DropdownTrigger from "./../DropdownTrigger";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

export default class CreateNewEventBtn extends React.Component {
	render() {
		return (
			<div className="ui grid" id="headerCreateNewEvent">
				<div className="one wide center aligned column" />
				<div className="two wide center aligned column">
					<Link to="/admin/area">
						<Button
							className="ui large fluid green button"
							type="submit"
						>
							<Icon name="left chevron" />
							Admin Area
						</Button>
					</Link>
				</div>
				<div className="one wide center aligned column" />
				<div className="eight wide center aligned column" />
				<div
					className="four wide center aligned column"
					id="dropTrigCreateEvent"
				>
					<DropdownTrigger />
				</div>
			</div>
		);
	}
}
