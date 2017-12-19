import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import DropdownTrigger from "./DropdownTrigger";

export default class PaymentBtn extends React.Component {
	render() {
		return (
			<div className="ui grid" id="headerCreateNewEvent">
				{/*<div className="four wide center aligned column">
					<div>
						            			<button className="ui large fluid orange button" type="submit">Create Event</button>
{" "}
					</div>
				</div>*/}
				<div className="four wide center aligned column ">
					<div>
						<Link to={"/"}>
							<button
								className="ui large fluid orange button"
								type="submit"
							>
								<Icon name="left chevron" />
								back to Events
							</button>
						</Link>
					</div>
				</div>
				<div className="eight wide center aligned column">
					<div>
						<button
							className="ui large fluid green button"
							type="submit"
						>
							Make Payment
						</button>
					</div>
				</div>
				<div className="four wide center aligned column" id="dropTrig">
					{/*<DropdownTrigger />*/}
				</div>
			</div>
		);
	}
}
