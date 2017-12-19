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

/*
	uploadWidget() {
		cloudinary.openUploadWidget(
			{
				cloud_name: "db8xttzan",
				upload_preset: "a5i6ioaz",
				tags: ['eccomerce_project'] //
			},
			function(error, result) {
			  console.log(error, result);
				if (error) {
					//handle error
				} else {
					//add the picture to your database in its own collection
				}
			}
		);
	};
	
	*/

/*
#1 
upload any files right away -> temporarily store the url -> then after event is saved, make sure unused uploads are removed.
also, in a cron job, remove unused uploaded images 

#2
when user adds a file using the button, do not upload -> when user saves the event, make sure event is inserted in the db, then upload the files from the form
*/
/*
#1 
upload any files right away -> temporarily store the url -> then after event is saved, make sure unused uploads are removed.
also, in a cron job, remove unused uploaded images 

#2
when user adds a file using the button, do not upload -> when user saves the event, make sure event is inserted in the db, then upload the files from the form
*/

// Cloudinary.config({
// 	cloud_name: "db8xttzan",
// 	api_key: "599451439769524",
// 	api_secret: "s-2BqPTqlgTcFruY1hUBw-lJnaw"
// });
