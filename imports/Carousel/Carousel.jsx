import React from "react";
var Carousel = require("nuka-carousel");

export default class PhotoCarousel extends React.Component {
	render() {
		var arr = [
			"http://insynctm.com/wp-content/uploads/2015/11/BUGGEDOut-Weekender-Day-3-Luke-Dyson-Photography-High-Res-112.jpg",
			"http://res.cloudinary.com/db8xttzan/image/upload/v1513945535/179430-fatherson-gig-at-the-garage_gxapn2.jpg",
			"http://insynctm.com/wp-content/uploads/2015/11/BUGGEDOut-Weekender-Day-3-Luke-Dyson-Photography-High-Res-112.jpg",
			"http://res.cloudinary.com/db8xttzan/image/upload/v1513945536/gig1_dmglnz.jpg",
			"http://res.cloudinary.com/db8xttzan/image/upload/v1513944616/thumb_msxrea.png",
			"http://res.cloudinary.com/db8xttzan/image/upload/v1513945536/springsteen-glasgow_spk2vr.jpg",
			"http://res.cloudinary.com/db8xttzan/image/upload/v1512733382/car_epdxzd.jpg",
			"http://insynctm.com/wp-content/uploads/2015/11/BUGGEDOut-Weekender-Day-3-Luke-Dyson-Photography-High-Res-112.jpg"
		];

		return (
			<div id="main-img">
				<div className="ui centered grid" id="carouselHeight">
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
