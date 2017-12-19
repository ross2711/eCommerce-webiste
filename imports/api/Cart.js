export const Cart = new Meteor.Collection(null);
var CartObserver = new LocalPersist(Cart, "cart");
