import React, { Component } from "react";
import NavbarCart from "./../Navbar/NavbarCart";
import CartList from "./CartList";
import CartHeader from "./CartHeader";
import Footer from "../Footer/Footer";
import history from "../History";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { Cart, buildCartItems } from "../api/Cart";
import { Events } from "../api/events";
import { Mongo } from "meteor/mongo";
import PaymentBtn from "./PaymentBtn";
import PaymentBtnBottom from "./PaymentBtnBottom";

export default class ShoppingCart extends React.Component {
  constructor() {
    debugger;
    super();
    this.state = {
      events: [],
      total: ""
    };
  }

  componentWillMount() {
    var that = this;
    Tracker.autorun(() => {
      var x = Events.find({}).fetch();
      debugger;
      var events = buildCartItems();
      debugger;
      if (events.events[0]) {
        that.setState({ events: events.events, total: events.total }, () => {
          debugger;
        });
      }
    });
  }

  removeEvent(eventId) {
    debugger;
    Cart.remove({ event: eventId }, e => console.log("here", e, "id", id));
  }
  render() {
    return (
      <div>
        <div className="ui grid centered" id="cartAreaForm">
          <div className="sixteen wide column">
            <div className="">
              <NavbarCart />
            </div>
          </div>

          <div className="sixteen wide column">
            <PaymentBtn />
          </div>
        </div>
        <h1
          id="bookerInfoPadding"
          className="ui sixteen wide column dividing header centered"
        >
          Tickets
        </h1>

        <div className="ui grid centered">
          <div className="sixteen wide column">
            <CartList
              cart={this.state.events}
              removeEvent={this.removeEvent}
              history={this.props.history}
            />
          </div>

          <div className="sixteen wide column">
            <h1
              id="checkoutText"
              className="ui sixteen wide column dividing header centered"
            >
              Total: €{this.state.total}
            </h1>
            <PaymentBtnBottom />
          </div>
          <div className="sixteen wide column">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

