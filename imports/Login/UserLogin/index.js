import React, { Component } from "react";
import UserLoginForm from "./UserLoginForm";
import NavbarUserLogin from "./../../Navbar/NavbarUserLogin";

export default class UserLogin extends React.Component {
  render() {
    return (
      <div className="ui grid centered" id="userRegForm">
        <div className="sixteen wide column">
          <div className="NavbarUserLogin">
            <NavbarUserLogin />
          </div>
        </div>

        <div className="nine wide column">
          <div>
            <UserLoginForm />
          </div>
        </div>
      </div>
    );
  }
}
