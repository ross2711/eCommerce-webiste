import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { _ } from "meteor/underscore";

import { Events } from "/imports/api/events";
// import { CartStorage } from "../../imports/api/cartStorage";

Meteor.methods({
	eventCreate(eventData) {
		// validate that eventData is ok for insert
		/*
    check(eventData, {
      title: String,
      location: [Number, Number],
      on: Date
    });
    */
		// returns a string _id from the db
		check(this.userId, String);
		return Events.insert({ ...eventData, admin: this.userId });
	},
	eventUpdate(eventData) {
		// expecting eventData in this format: eventData = { _id: 'asdfadsf', title: 'new title',  }
		// _.omit(eventData, '_id') = { title: 'new tittle' }
		check(this.userId, String);
		const event = Events.findOne(eventData._id);
		if (eventData.admin == event.admin) {
			return Events.update(eventData._id, {
				$set: _.omit(eventData, "_id")
			});
		}
	}
});

// purchasedCreate(eventData) {
//     check(this.userId, String);
//     return Cart.insert({ ...eventData, user: this.userId });
//   },

//   purchasedUpdate(eventData) {
//     check(this.userId, String);
//     const event = Cart.findOne(eventData._id);
//     if (eventData.user == event.user) {
//       return Cart.update(eventData._id, { $set: _.omit(eventData, "_id") });
//     }

/*
event = {
  _id: 'asdfwerq',
  title: 'event 2',
  on: '26/01/2018',
  sponsors: ['coca cola', 'tesla', 'google'],
  attendees: 1
}


Events.update('asdfwerq', {$set: {title: 'event 2', attendees: 5}});
Events.update('asdfwerq', {$unset: {title: true}});

Events.update('asdfwerq', {$addToSet: {sponsors: 'google'}});
Events.update('asdfwerq', {$pull: {sponsors: 'microsoft'}});
Events.update('asdfwerq', {$inc: {attendees: 1}});
Events.update('asdfwerq', {$inc: {attendees: -1}});


{ title: "event 2" }

$set, $unset,
$addToSet, $pull, $push
$inc

*/
