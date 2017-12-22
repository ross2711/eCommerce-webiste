import React from "react";
import { Link } from "react-router-dom";
// import LoginLogout from './DropdownNav'

export default class NavbarAdminOrders extends React.Component {
  render() {
    return (
      <div className="ui container navContainer">
        <div className="ui large menu">
          <div className="item">
            <img
              width={75}
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
              <p id="navTextCart">Orders Summary</p>
            </div>
          </div>

          {/* <div id="test" className="right huge menu">
          <a className="item">
            <div id="registerBtn" className="ui huge button primary">Register</div>
          </a>
          <a className="item">
              <LoginLogout />
          </a>  */}
        </div>
      </div>
    );
  }
}
