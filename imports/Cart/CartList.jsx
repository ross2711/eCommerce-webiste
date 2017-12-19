import React from "react";
import CartItem from "./CartItem";

export default class CartList extends React.Component {
	render() {
		// if (this.props.cart) {
		// }
		return (
			<div>
				{this.props.cart.map((ele, i) => {
					return (
						<CartItem
							key={i}
							id={ele._id}
							quantity={ele.quantity}
							image={ele.image}
							title={ele.title}
							artist={ele.artist}
							venueName={ele.venueName}
							description={ele.description}
							price={ele.price}
							city={ele.city}
							removeEvent={this.props.removeEvent}
							history={this.props.history}
						/>
					);
				})}
			</div>
		);
	}
}
