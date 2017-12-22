import { Events } from "./events";
export const Cart = new Meteor.Collection(null);
var CartObserver = new LocalPersist(Cart, "cart");

// export const buildCartItems = () => {
// 	let total = 0;
// 	const items = Cart.find().fetch();
// 	const events = items.map(item => {
// 		var event = Events.findOne({ _id: item.event });
// 		// event.quantity = item.quantity;
// 		if (event) {
// 			event.quantity = item.quantity;
// 			total += item.quantity * event.price; // 33.50
// 		}

// 		return event;
// 	});
// 	return { events, total: total.toFixed(2) };
// };

export const buildCartItems = () => {
	let total = 0;
	Tracker.autorun(() => {});
	const items = Cart.find({}).fetch();
	const events = items.map(item => {
		var event = Events.findOne({ _id: item.event });
		// event.quantity = item.quantity;
		if (event) {
			event.quantity = item.quantity;
			total += item.quantity * event.price; // 33.50
		}
		return event;
	});
	return { events, total: total.toFixed(2) };
};
