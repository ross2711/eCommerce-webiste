import React, { Component } from "react";
import NavbarAdminOrders from "./../Navbar/NavbarAdminOrders";
import AdminOrderList from "./AdminOrderList";
import AdminOrderHeader from "./AdminOrderHeader";
import Footer from "../Footer/Footer";
import history from "../History";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { Cart, buildCartItems } from "../api/Cart";
import { Events } from "../api/events";
import { Mongo } from "meteor/mongo";

export default class AdminOrders extends React.Component {
  constructor() {
    debugger;
    super();
    this.state = {
      obj: []
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

  render() {
    return (
      <div>
        <div className="ui grid centered" id="cartAreaForm">
          <div className="sixteen wide column">
            <div className="">
              <NavbarAdminOrders />
            </div>
          </div>
        </div>

        <h1
          id="bookerInfoPadding"
          className="ui sixteen wide column dividing header centered"
        >
          Admin Area Order Summary
        </h1>

        <div className="ui grid centered">
          <div className="sixteen wide column">
            <AdminOrderList obj={this.state.obj} />
          </div>

          <div className="sixteen wide column">
            <h1
              id="checkoutText"
              className="ui sixteen wide column dividing header centered"
            />
          </div>
          <div className="sixteen wide column">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
