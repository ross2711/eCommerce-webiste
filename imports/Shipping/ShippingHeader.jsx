import React from "react";
import DropdownTrigger from "./DropdownTrigger";

export default class CreateNewEventBtn extends React.Component {
	render() {
		return (
			<div className="ui grid" id="headerCreateNewEvent">
				<div className="four wide center aligned column">
					<div>
						{/*            			<button className="ui large fluid orange button" type="submit">Create Event</button>
*/}
					</div>
				</div>
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
