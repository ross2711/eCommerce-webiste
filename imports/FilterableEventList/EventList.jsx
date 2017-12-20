import React from "react";
import EventItem from "./EventItem";

export default class EventList extends React.Component {
	render() {
		return (
			<div>
				{this.props.events.map((ele, i) => {
					return (
						<EventItem
							key={i}
							id={ele._id}
							image={ele.image}
							title={ele.title}
							artist={ele.artist}
							genre={ele.genre}
							startDate={ele.startDate}
							startTime={ele.startTime}
							finishDate={ele.finishDate}
							finishTime={ele.finishTime}
							description={ele.description}
							venueName={ele.venueName}
							number={ele.number}
							address={ele.address}
							image={ele.image}
							price={ele.price}
							addToCart={this.props.addToCart}
						/>
					);
				})}
			</div>
		);
	}
}
