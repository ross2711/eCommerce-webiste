import React from "react";
import {
  Button,
  Form,
  Icon,
  Message,
  Dropdown,
  Component
} from "semantic-ui-react";
import DropdownCountry from "../Registration/DropdownCountry";
import { Link } from "react-router-dom";

export default class Checkout extends React.Component {
  render() {
    return (
      <div>
        <h1
          id="bookerInfoPadding"
          className="ui sixteen wide column dividing header centered"
        >
          Payment Options
        </h1>
        <div className="ui internally celled grid" id="bookerContainerInfo">
          <div className="row">
            <div className="eight wide centered column">
              <div className="row">
                <h1 className="ui eight wide column dividing header centered">
                  Login or Register as User
                </h1>
              </div>
              <div className="row">
                <div className="ui sixteen wide column centered">
                  <div>
                    <Link to="/user/login">
                      <button
                        className="ui large fluid green button"
                        type="submit"
                      >
                        Login as User
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="ui two wide column centered" />
                <div className="ui sixteen wide column centered">
                  <img
                    id="imgPaymentOpt"
                    src="http://res.cloudinary.com/db8xttzan/image/upload/v1513019646/profile-icon_q3pcew.png"
                  />
                </div>
              </div>
              <div className="row">
                <div className="ui sixteen wide column centered">
                  <div>
                    <Link to="/user/reg">
                      <button
                        className="ui large fluid orange button"
                        type="submit"
                      >
                        Register
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="eight wide centered column">
              <div className="row">
                <h1 className="ui eight wide column dividing header centered">
                  No Registration
                </h1>
              </div>
              <div className="row">
                <div className="ui sixteen wide column centered">
                  <div>
                    <Link to="/fastpay">
                      <button
                        className="ui large fluid yellow button"
                        type="submit"
                      >
                        Fast Pay
                        <Icon name="right chevron" />
                        <Icon name="right chevron" />
                        <Icon name="right chevron" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="ui sixteen wide column centered">
                  <img
                    id="imgPaymentOpt"
                    src="http://res.cloudinary.com/db8xttzan/image/upload/v1513686518/fast_jcop4b.jpg"
                  />
                </div>
              </div>
              <div className="row">
                <div className="ui sixteen wide column centered">
                  <div>
                    <Link to="/fastpay">
                      <button
                        className="ui large fluid yellow button"
                        type="submit"
                      >
                        Fast Pay
                        <Icon name="right chevron" />
                        <Icon name="right chevron" />
                        <Icon name="right chevron" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1
          id="checkoutText"
          className="ui sixteen wide column dividing header centered"
        >
          ###
        </h1>

        <h1
          id="checkoutText"
          className="ui sixteen wide column dividing header centered"
        >
          ###
        </h1>
      </div>
    );
  }
}
