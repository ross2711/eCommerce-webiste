import React from "react";
import ShippingForm from "./ShippingForm";
import ShippingHeader from "./ShippingHeader";
import NavbarShipping from "./../Navbar/NavbarShipping";
import Footer from "../Footer/Footer";

export default class Shipping extends React.Component {
  render() {
    return (
      <div>
        <div className="ui grid centered" id="shippingAreaForm">
          <div className="sixteen wide column">
            <div className="">
              <NavbarShipping />
            </div>
          </div>

          <div className="sixteen wide column">
            <ShippingHeader />
          </div>

          <div className="nine wide column">
            <ShippingForm />
          </div>
        </div>

        <div className="sixteen wide column">
          <Footer />
        </div>
      </div>
    );
  }
}
