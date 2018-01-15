import React from "react";
import { Link } from "react-router-dom";
import history from "../History";

export default class NavbarUserCheckout extends React.Component {
  render() {
    return (
      <div className="ui container navContainer">
        <div className="ui large menu">
          <div className="item">
            <img
              width={80}
              src="http://res.cloudinary.com/db8xttzan/image/upload/v1512645165/favicon_vxnyjx.ico"
            />
          </div>
          <div className="item">
            <Link to="/">
              <p id="navText">Ticead Alba</p>
            </Link>
          </div>

          <div className="right menu">
            <div className="item">
              <p id="navTextRegister">User Checkout</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
