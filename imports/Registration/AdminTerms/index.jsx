import React from "react";
import AdminTerms from "./AdminTerms";
import NavbarAdminTerms from "./../../Navbar/NavbarAdminTerms";

export default class AdminTerm extends React.Component {
  render() {
    return (
      <div className="ui grid centered" id="adminRegForm">
        <div className="sixteen wide column">
          <div className="">
            <NavbarAdminTerms />
          </div>
        </div>

        <div className="nine wide column">
          <div>
            <AdminTerms />
          </div>
        </div>
      </div>
    );
  }
}
