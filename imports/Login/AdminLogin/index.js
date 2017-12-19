import React, { Component } from "react";

import AdminLoginForm from "./AdminLoginForm";
import NavbarAdminLogin from "./../../Navbar/NavbarAdminLogin";

export default class AdminLogin extends React.Component {
  render() {
    return (
      <div className="ui grid centered" id="userRegForm">
        <div className="sixteen wide column">
          <div className="NavbarAdminLogin">
            <NavbarAdminLogin />
          </div>
        </div>

        <div className="nine wide column">
          <div>
            <AdminLoginForm />
          </div>
        </div>
      </div>
    );
  }
}
