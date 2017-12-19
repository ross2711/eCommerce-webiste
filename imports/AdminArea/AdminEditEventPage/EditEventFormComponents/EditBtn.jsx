import React from "react";
import { Link } from "react-router-dom";

export default class EditBtn extends React.Component {
	render() {
		return (
			<div id="regBtn">
				<Link to="/admin/area">
					<button
						className="ui massive fluid green button"
						type="submit"
					>
						Update Your Event !
					</button>
				</Link>
			</div>
		);
	}
}
