import React from "react";
import { Radio } from "semantic-ui-react";

export default class Genre extends React.Component {
	render() {
		return (
			<div className="ui container">
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
							<label>Rock</label>
						</div>
						<div className="column" />
					</div>

					<div className="row">
						<div className="column" />
						<div className="column">
							<Radio toggle />
						</div>
						<div className="column">
							<label>Pop</label>
						</div>
						<div className="column" />
					</div>

					<div className="row">
						<div className="column" />
						<div className="column">
							<Radio toggle />
						</div>
						<div className="column">
							<label>Electronic</label>
						</div>
						<div className="column" />
					</div>

					<div className="row">
						<div className="column" />
						<div className="column">
							<Radio toggle />
						</div>
						<div className="column">
							<label>Classical</label>
						</div>
						<div className="column" />
					</div>
				</div>
			</div>
		);
	}
}

// <div className="ui radio toggle" id="toggleBtn">
// 				    <Radio toggle />
// 				    <label>All</label>
// 			    </div>

// 			  	<div className="ui radio toggle" id="toggleBtn">
// 				    <Radio toggle />
// 				    <label>Rock</label>
// 			    </div>

// 			    <div className="ui radio toggle" id="toggleBtn">
// 				    <Radio toggle />
// 				    <label>Pop</label>
// 			    </div>

// 			    <div className="ui radio toggle" id="toggleBtn">
// 				    <Radio toggle />
// 				    <label>Electronic</label>
// 			    </div>

// 			    <div className="ui radio toggle" id="toggleBtn">
// 				    <Radio toggle />
// 				    <label>Classical</label>
// 			    </div>
