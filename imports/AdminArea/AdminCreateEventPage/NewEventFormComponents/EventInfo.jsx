import React from "react";

export default class EventInfo extends React.Component {
	getData(e) {
		var startDate = this.refs.startDate.value.trim();
		var startTime = this.refs.startTime.value.trim();
		var finishDate = this.refs.finishDate.value.trim();
		var finishTime = this.refs.finishTime.value.trim();

		debugger;
		this.props.passEventInfo(startDate, startTime, finishDate, finishTime);
	}

	render() {
		return (
			<div className="fields">
				<div className="four fields">
					<div className="field">
						<label id="formText">Start Date</label>
						<input
							onChange={this.getData.bind(this)}
							ref="startDate"
							type="date"
							name="city"
							placeholder="Start Date"
						/>
					</div>
					<div className="field">
						<label id="formText">Start Time</label>
						<input
							onChange={this.getData.bind(this)}
							ref="startTime"
							type="text"
							name="Start Time"
							placeholder="Finish Time"
						/>
					</div>
					<div className="field">
						<label id="formText">Finish Date</label>
						<input
							onChange={this.getData.bind(this)}
							ref="finishDate"
							type="date"
							name="Finish Time"
							placeholder="Finish Date"
						/>
					</div>

					<div className="field">
						<label id="formText">Finish Time</label>
						<input
							onChange={this.getData.bind(this)}
							ref="finishTime"
							type="text"
							name="Finish Time"
							placeholder="Finish Time"
						/>
					</div>
				</div>
			</div>
		);
	}
}
