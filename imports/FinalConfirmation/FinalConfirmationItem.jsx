import React from "react";
import { Button } from "semantic-ui-react";
import Checkout from "./Checkout";
import { Session } from "meteor/session";
import { Router, Route, IndexRoute, browserHistory } from "react-router-dom";
import { Cart, buildCartItems } from "../api/Cart";
import { Events } from "../api/events";

export default class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      buyer: null,
      total: 0
    };
  }

  componentWillMount() {
    Tracker.autorun(() => {
      var events = buildCartItems();
      if (events.length < 1) {
        return;
      }
      const { total } = buildCartItems();

      console.log("total", total);
      this.setState({ total });
    });
    const buyer = Session.get("buyer");
    this.setState({ buyer });
  }

  render() {
    return (
      <div>
        <div className="ui internally celled grid" id="bookerContainerInfo">
          <div className="row" id="eventPad">
            <div className="two wide centered column">
              <img
                id="imgCheckout"
                src={
                  "http://res.cloudinary.com/db8xttzan/image/upload/v1513019646/profile-icon_q3pcew.png"
                }
              />
            </div>

            <div className="fourteen wide column">
              <div className="ui padded grid">
                <div className="row">
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    Full Name
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    Address
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    E-mail
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    Telephone
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui one wide column dividing header"
                  >
                    Total
                  </h2>
                </div>

                <div className="row">
                  <h2 id="formText" className="ui two wide column">
                    {this.state.buyer.firstName} {this.state.buyer.lastName}
                  </h2>
                  <h2 id="formText" className="ui four wide column">
                    {this.state.buyer.number} {this.state.buyer.address}{" "}
                    {this.state.buyer.city}
                  </h2>

                  <h2 id="formText" className="ui three wide column">
                    {this.state.buyer.email}
                  </h2>

                  <h2 id="formText" className="ui three wide column">
                    {this.state.buyer.telephone}
                  </h2>
                  <h2 id="formText" className="ui two wide column">
                    € {this.state.total}
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                </div>

                <div className="row">
                  <div id="checkoutEditBtn">
                    <Checkout
                      email={this.state.buyer.email}
                      amount={this.state.total * 100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
