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
							<Radio
								toggle
								checked={this.props.selected.includes("rock")}
								onChange={(e, d) =>
									this.props.toggle("rock", d.checked)
								}
							/>
						</div>
						<div className="column">
							<label>Rock</label>
						</div>
						<div className="column" />
					</div>

					<div className="row">
						<div className="column" />
						<div className="column">
							<Radio
								toggle
								checked={this.props.selected.includes("pop")}
								onChange={(e, d) =>
									this.props.toggle("pop", d.checked)
								}
							/>
						</div>
						<div className="column">
							<label>Pop</label>
						</div>
						<div className="column" />
					</div>

					<div className="row">
						<div className="column" />
						<div className="column">
							<Radio
								toggle
								checked={this.props.selected.includes(
									"electronic"
								)}
								onChange={(e, d) =>
									this.props.toggle("electronic", d.checked)
								}
							/>
						</div>
						<div className="column">
							<label>Electronic</label>
						</div>
						<div className="column" />
					</div>

					<div className="row">
						<div className="column" />
						<div className="column">
							<Radio
								toggle
								checked={this.props.selected.includes(
									"classical"
								)}
								onChange={(e, d) =>
									this.props.toggle("classical", d.checked)
								}
							/>
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
