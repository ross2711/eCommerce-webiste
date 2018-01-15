import React from "react";
import NavbarUserCheckout from "./../Navbar/NavbarUserCheckout";
import CheckoutForm from "./UserCheckoutForm";
import UserCheckoutHeader from "./UserCheckoutHeader";
import Footer from "./../Footer/Footer";
import { Cart } from "../api/Cart";

export default class UserCheckout extends React.Component {
  render() {
    return (
      <div>
        <div className="ui grid centered" id="userRegForm">
          <div className="sixteen wide column">
            <div className="NavbarRegForm">
              <NavbarUserCheckout />
            </div>
          </div>

          <div className="nine wide column">
            <CheckoutForm />
          </div>
        </div>
      </div>
    );
  }
}
