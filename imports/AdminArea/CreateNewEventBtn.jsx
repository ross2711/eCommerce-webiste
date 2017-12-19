import React from "react";
import DropdownTrigger from "./DropdownTrigger";
import { Link } from "react-router-dom";

export default class CreateNewEventBtn extends React.Component {
	render() {
		return (
			<div className="ui grid" id="headerCreateNewEvent">
				<div className="four wide center aligned column">
					<div />
				</div>
				<div className="eight wide center aligned column">
					<div>
						<Link to="/admin/create/event">
							<button
								className="ui large fluid orange button"
								type="submit"
							>
								Create New Event
							</button>
						</Link>
					</div>
				</div>
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



