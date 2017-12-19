import React from "react";

export default props => (
	<div className="ui centered">
		<div className="ui center aligned segment">
			<label id="formText">Add Event Image here</label>
			<div className="field">
				<div id="holdingDivForImage" />
				<a href="#" id="upload_widget_opener">
					Upload multiple images
				</a>
			</div>
			<div className="upload">
				<input
					type="file"
					name="event_image"
					onChange={e => props.passEventImage(e.currentTarget.files)}
				/>
			</div>
		</div>
	</div>
);
