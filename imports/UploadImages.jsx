import React from "react";

const uploadImage = e => {
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
			onChange={e => props.passEventImage(e.currentTarget.files)}
		/>
	</div>
);

