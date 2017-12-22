import React from "react";
var Carousel = require("nuka-carousel");
// import { Grid } from 'semantic-ui-react';

export default class PhotoCarousel extends React.Component {
	render() {
		var arr = [
			"http://insynctm.com/wp-content/uploads/2015/11/BUGGEDOut-Weekender-Day-3-Luke-Dyson-Photography-High-Res-112.jpg",
			"http://insynctm.com/wp-content/uploads/2015/11/BUGGEDOut-Weekender-Day-3-Luke-Dyson-Photography-High-Res-112.jpg",
			"http://res.cloudinary.com/db8xttzan/image/upload/v1512733382/car_epdxzd.jpg",
			"http://insynctm.com/wp-content/uploads/2015/11/BUGGEDOut-Weekender-Day-3-Luke-Dyson-Photography-High-Res-112.jpg"
		];

		return (
			<div id="main-img">
				<div className="ui centered grid">
					<div className="sixteen wide centered column">
						<div className="centered row row-carousel">
							<Carousel
								centered
								wrapAround={true}
								autoplay={true}
								autoplayInterval={3000}
							>
								{arr.map((photo, i) => {
									return (
										<div key={i}>
											{" "}
											<img
												id="main-img"
												height={1000}
												src={photo}
											/>{" "}
										</div>
									);
								})}
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// import _ from 'lodash'
// import React from 'react'
// import { Grid, Image } from 'semantic-ui-react'

// const columns = _.times(16, i => (
//   <Grid.Column key={i}>
//     <Image src='/assets/images/wireframe/image.png' />
//   </Grid.Column>
// ))

// const GridExampleGrid = () => (
//   <Grid>{columns}</Grid>
// )

// export default GridExampleGrid
