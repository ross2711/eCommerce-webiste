import React, { Component } from "react";
import NavbarFinalConfirmation from "./../Navbar/NavbarFinalConfirmation";
import FinalConfirmationList from "./FinalConfirmationList";
import Footer from "../Footer/Footer";
import Checkout from "./Checkout";
import history from "../History";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { Cart } from "../api/Cart";
import { Events } from "../api/events";
import { Mongo } from "meteor/mongo";

export default class FinalConfirmation extends React.Component {
  debugger;
  constructor(props) {
    super(props);
    this.state = {
      final: ""
    };
  }

  componentWillMount() {
    Tracker.autorun(() => {
      debugger;
      var final = Cart.find({}).fetch();
      var events = Events.find({}).fetch();
      this.setState({ final });
      debugger;
    });
  }

  render() {
    return (
      <div>
        <div className="ui grid centered" id="cartAreaForm">
          <div className="sixteen wide column">
            <div className="">
              <NavbarFinalConfirmation />
            </div>
          </div>
          <div className="sixteen wide column" />
        </div>

        <h1
          id="bookerInfoPadding"
          className="ui sixteen wide column dividing header centered"
        >
          Final Confirmation
        </h1>

        <div className="ui grid centered">
          <div className="sixteen wide column">
            <FinalConfirmationList final={this.state.final} />
          </div>
        </div>
      </div>
    );
  }
}
