import React from "react";
import NavbarFastPayCheckout from "./../Navbar/NavbarFastPayCheckout";
import CheckoutForm from "./CheckoutForm";
import FastPayHeader from "./FastPayHeader";
import Footer from "./../Footer/Footer";
// import EventTitle from "./CheckoutFormComponents/EventTitle";

export default class FastPayCheckout extends React.Component {
  render() {
    return (
      <div>
        <div className="ui grid centered" id="adminAreaForm">
          <div className="sixteen wide column">
            <div className="NavbarRegForm">
              <NavbarFastPayCheckout />
            </div>
          </div>

          <div className="sixteen wide column">{/*<FastPayHeader />*/}</div>

          <div className="nine wide column">
            <div>
              <CheckoutForm />
            </div>
          </div>
        </div>
        <div className="sixteen wide column">
          <FastPayHeader />
        </div>

        <div className="ui grid centered">
          <div className="sixteen wide column">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
