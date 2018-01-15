import React from "react";
import { Button } from "semantic-ui-react";
import { Router, Route, IndexRoute, browserHistory } from "react-router-dom";
import { Cart } from "../api/Cart";

export default class AdminOrderItem extends React.Component {
  constructor() {
    super();
    this.state = {};
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
                    User Id
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    Customer Name
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    Customer address
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    Customer email
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    Event Name
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui three wide column dividing header"
                  >
                    location
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui one wide column dividing header"
                  >
                    Tickets purchased
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui one wide column dividing header"
                  >
                    Total - Stripe
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
