import React from "react";
import DropdownTrigger from "./DropdownTrigger";

export default class Navbar extends React.Component {
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
            <p id="navText">Ticead Alba</p>
          </div>

          <div className="right huge menu">
            <a className="item" id="dropTrig">
              <DropdownTrigger />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
