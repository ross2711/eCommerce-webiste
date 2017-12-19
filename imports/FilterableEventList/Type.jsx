import React from "react";
import { Radio } from "semantic-ui-react";

export default class RadioExampleToggle extends React.Component {
	render() {
		return (
			<div className="ui container" id="toggleBtnContainer">
				<div className="ui four column grid" id="toggleBtn">
					<div className="row">
						<div className="column" />
						<div className="column">
							<Radio toggle />
						</div>
						<div className="column">
							<label>All</label>
						</div>
						<div className="column" />
					</div>

					<div className="row">
						<div className="column" />
						<div className="column">
							<Radio toggle />
						</div>
						<div className="column">
							<label>Concert</label>
						</div>
						<div className="column" />
					</div>

					<div className="row">
						<div className="column" />
						<div className="column">
							<Radio toggle />
						</div>
						<div className="column">
							<label>Festival</label>
						</div>
						<div className="column" />
					</div>

					<div className="row">
						<div className="column" />
						<div className="column">
							<Radio toggle />
						</div>
						<div className="column">
							<label>Exhibition</label>
						</div>
						<div className="column" />
					</div>
				</div>
			</div>
		);
	}
}
