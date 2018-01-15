import React, { Component } from "react";
import CheckoutOptionForm from "./CheckoutOptionForm";
import NavbarCheckoutOption from "../Navbar/NavbarCheckoutOption";
import Footer from "../Footer/Footer";

export default class CheckoutOption extends React.Component {
  render() {
    return (
      <div className="ui grid centered" id="">
        <div className="sixteen wide column">
          <div className="NavbarUserLogin">
            <NavbarCheckoutOption />
          </div>
        </div>
        <div className="nine wide column">
          <div>
            <CheckoutOptionForm />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


