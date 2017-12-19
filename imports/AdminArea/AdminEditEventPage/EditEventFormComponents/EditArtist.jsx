import React from "react";

export default props => {
	return (
		<div className="field">
			<label id="formText">Artist</label>
			<input
				onChange={e => props.passArtist(e.target.value)}
				type="text"
				name="artist"
				placeholder={props.artist}
			/>
		</div>
	);
};
