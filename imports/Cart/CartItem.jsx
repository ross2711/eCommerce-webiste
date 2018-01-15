import React from "react";
import { Button } from "semantic-ui-react";
import { Router, Route, IndexRoute, browserHistory } from "react-router-dom";
import { Cart } from "../api/Cart";

export default class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ""
    };
  }

  getId(id) {
    debugger;
    this.props.removeEvent(id);
  }

  setEvent() {
    this.props.updateEvent(this.props.id, this.state.data);
  }

  increaseQty() {
    Cart.update({ event: this.props.id }, { $inc: { quantity: 1 } });
  }

  decreaseQty() {
    if (this.props.quantity > 1)
      Cart.update({ event: this.props.id }, { $inc: { quantity: -1 } });
  }

  render() {
    return (
      <div>
        <div className="ui internally celled grid" id="bookerContainerInfo">
          <div className="row" id="eventPad">
            <div className="two wide centered column">
              <img id="imgCheckout" src={this.props.image} />
            </div>
            <div className="fourteen wide column">
              <div className="ui padded grid">
                <div className="row">
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    Event Name
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    Venue
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    City
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui three wide column dividing header"
                  >
                    Tickets
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui one wide column dividing header"
                  >
                    €
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
                    {this.props.title}
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2 id="formText" className="ui two wide column">
                    {this.props.venueName}
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2 id="formText" className="ui two wide column">
                    {this.props.city}
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2 id="formText" className="ui one wide column">
                    {this.props.quantity}
                  </h2>
                  <h2 id="formText" className="ui two wide column">
                    <div class="ui icon yellow mini buttons">
                      <button
                        className="ui mini button white"
                        onClick={this.increaseQty.bind(this)}
                      >
                        <i className="plus icon green" />
                      </button>
                      <button
                        className="ui mini button"
                        onClick={this.decreaseQty.bind(this)}
                      >
                        <i className="minus icon red" />
                      </button>
                    </div>
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2 id="formText" className="ui one wide column">
                    €{this.props.price}
                  </h2>

                  <h2 id="formText" className="ui one wide column" />
                  <h2 id="formText" className="ui one wide column">
                    €{this.props.price * this.props.quantity}
                  </h2>
                </div>
                <div className="row">
                  <div id="checkoutEditBtn">
                    <Button
                      className="ui red mini button"
                      onClick={this.getId.bind(this, this.props.id)}
                    >
                      Remove &nbsp;
                      <i className="trash icon" />
                    </Button>
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
