import { Mongo } from "meteor/mongo";
export const Orders = new Mongo.Collection("orders");

// {
//   events: {
//     type: Array
//     min: 1
//   },

//   'events.admin': {
//     type: String
//   },
//   'events._id': {
//     type: String
//   },
//   'events.quantity': {
//     type: Number
//   }

//   total: {
//     type: Number,
//   },
//   orderedAt: {
//     type: Date
//   },
//   userId: {
//     type: String,
//     optional: true
//   },
//   guest: {
//     type: Object,
//     optional: true
//   }
// }

// { this.props.order.userId ? username : 'Guest User' }

// Purchased tickets for { this.props.events.length } events.

// if (this.userId) {
//   eventData = {...eventData, userId: this.usersId};
// }

// const { events, total } = buildCartItems();
// Meteor.call('orderCreate', { guest: this.state.guestData, events, total, orderedAt: new Date() })

// [{
//   events: [{
//     _id: 'event1',
//     admin: 'admin1',
//     quantity: 2
//   }, {
//     _id: 'event2',
//     admin: 'admin2',
//     quantity: 1
//   }],
//   total: 100,
//   orderedAt: 'some date',
//   userId: 'user1'
// }, {
//   events: [{
//     _id: 'event1',
//     admin: 'admin1',
//     quantity: 2
//   }],
//   total: 40,
//   orderedAt: 'some date',
//   guest: {
//     name: 'ross f',
//     phone: '23412',
//     emails: '@gmail.com'
//   }
// }]
