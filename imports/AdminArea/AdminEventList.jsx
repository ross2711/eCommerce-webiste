import React from "react";
import AdminEventItem from "./AdminEventItem";

export default class AdminEventList extends React.Component {
	render() {
		return (
			<div>
				{this.props.events.map((ele, i) => {
					return (
						<AdminEventItem
							key={i}
							id={ele._id}
							image={ele.image}
							title={ele.title}
							artist={ele.artist}
							tickets={ele.tickets}
							price={ele.price}
							genre={ele.genre}
							startDate={ele.startDate}
							startTime={ele.startTime}
							finishDate={ele.finishDate}
							finishTime={ele.finishTime}
							description={ele.description}
							venueName={ele.venueName}
							firstName={ele.firstName}
							lastName={ele.lastName}
							telephone={ele.telephone}
							email={ele.email}
							number={ele.number}
							address={ele.address}
							city={ele.city}
							image={ele.image}
							removeEvent={this.props.removeEvent}
							updateEvent={this.props.updateEvent}
							history={this.props.history}
						/>
					);
				})}
			</div>
		);
	}
}
