import React from "react";
import AdminOrderItem from "./AdminOrderItem";

export default class AdminOrderList extends React.Component {
	render() {
		return (
			<div>
				{this.props.obj.map((ele, i) => {
					return (
						<AdminOrderItem
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
						/>
					);
				})}
			</div>
		);
	}
}
