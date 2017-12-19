import React from "react";

const uploadEditImage = e => {
	const { files } = e.currentTarget;

	Cloudinary.upload(files, (err, res) => {
		console.log("file upload", err, res);
	});
};

export default props => (
	<div className="upload">
		<input
			type="file"
			name="event_image"
			onChange={e => props.passEditEventImage(e.currentTarget.files)}
		/>
	</div>
);
