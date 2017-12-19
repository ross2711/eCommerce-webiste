import React from "react";
import AdminReg from "./AdminReg";
import NavbarRegister from "./../../Navbar/NavbarRegister";

export default class Admin extends React.Component {
  render() {
    return (
      <div className="ui grid centered" id="adminRegForm">
        <div className="sixteen wide column">
          <div className="NavbarRegForm">
            <NavbarRegister />
          </div>
        </div>

        <div className="nine wide column">
          <div>
            <AdminReg />
          </div>
        </div>
      </div>
    );
  }
}
