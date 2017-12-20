import React from "react";
import UserReg from "./UserReg";
import NavbarUserRegister from "./../../Navbar/NavbarUserRegister";

export default class User extends React.Component {
  render() {
    return (
      <div className="ui grid centered" id="userRegForm">
        <div className="sixteen wide column">
          <div className="NavbarRegForm">
            <NavbarUserRegister />
          </div>
        </div>

        <div className="nine wide column">
          <div>
            <UserReg />
          </div>
        </div>
      </div>
    );
  }
}


