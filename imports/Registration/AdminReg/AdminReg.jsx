import React from "react";
import {
  Button,
  Form,
  Icon,
  Message,
  Dropdown,
  Component
} from "semantic-ui-react";
import { Accounts } from "meteor/accounts-base";
import DropdownCountry from "../DropdownCountry";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export default class AdminReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signed_up: false,
      signup_error: null,
      country: ""
    };
    this.getData = this.getData.bind(this);
  }

  getData(country) {
    this.setState({ country });
  }

  register(e) {
    e.preventDefault();
    this.getData();
    debugger;
    var email = this.refs.email.value.trim();
    var password = this.refs.password.value.trim();

    var firstName = this.refs.firstName.value.trim();
    var lastName = this.refs.lastName.value.trim();
    var companyName = this.refs.companyName.value.trim();
    var businessType = this.refs.businessType.value.trim();
    var businessAddressNumber = this.refs.businessAddressNumber.value.trim();
    var businessAddressStreet = this.refs.businessAddressStreet.value.trim();
    var city = this.refs.city.value.trim();
    var additionalDetails = this.refs.additionalDetails.value.trim();
    var country = this.state.country;

    var profile = {
      admin: true,
      firstName,
      lastName,
      companyName,
      businessType,
      businessAddressNumber,
      businessAddressStreet,
      city,
      additionalDetails,
      country
    };

    console.log(email, password, profile);

    Meteor.call("createUserInServer", email, password, profile, err => {
      if (err) {
        console.log(err);
        this.setState({ signup_error: err });
        debugger;
      } else {
        console.log("logging in");
        Meteor.loginWithPassword(email, password, () => {
          console.log("done");
          this.setState({ signed_up: true });
        });
      }
    });
  }

  render() {
    if (this.state.signed_up) {
      return <Redirect to="/" />;
    }
    return (
      <div className="ui container" id="regForm">
        <Message
          id="adminRegFormTitle"
          attached
          header="Welcome to Ticead Alba Admin Registration"
          content="Fill out the form below and Register for a new Admin Account"
        />

        <form className="ui huge form" id="personalInfo">
          <h3 id="formText" className="ui inverted dividing header">
            Personal Info
          </h3>
          <div className="ui form">
            <label id="formText">Name</label>
            <div className="two fields">
              <div className="field">
                <input
                  ref="firstName"
                  type="text"
                  name="shipping[first-name]"
                  placeholder="First Name"
                />
              </div>
              <div className="field">
                <input
                  ref="lastName"
                  type="text"
                  name="shipping[last-name]"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <h3 id="formText" className="ui inverted dividing header">
            Account Info
          </h3>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <label id="formText">E-mail</label>
                <input
                  ref="email"
                  type="text"
                  name="E-mail"
                  placeholder="example@company.com"
                />
              </div>
              <div className="field">
                <label id="formText">Password</label>
                <input
                  ref="password"
                  type="text"
                  name="Password"
                  placeholder="Create Password"
                />
              </div>
            </div>
          </div>

          <h3 id="formText" className="ui inverted dividing header">
            Company Info
          </h3>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <label id="formText">Company Name</label>
                <input
                  ref="companyName"
                  type="text"
                  name="company"
                  placeholder="Company Name"
                />
              </div>
              <div className="field">
                <label id="formText">Business Type</label>
                <input
                  ref="businessType"
                  type="text"
                  name="business"
                  placeholder="Business Type"
                />
              </div>
            </div>

            <label id="formText">Address</label>
            <div className="fields">
              <div className="four wide field">
                <input
                  ref="businessAddressNumber"
                  type="text"
                  name="shipping[address]"
                  placeholder="Number"
                />
              </div>
              <div className="twelve wide field">
                <input
                  ref="businessAddressStreet"
                  type="text"
                  name="shipping[address-2]"
                  placeholder="Street Address"
                />
              </div>
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label id="formText">City</label>
              <input ref="city" type="text" name="city" placeholder="City" />
            </div>
            <div className="field">
              <label id="formText">Country</label>
            </div>
          </div>

          <h3 id="formText" className="ui inverted dividing header">
            Additional Details
          </h3>
          <div className="field">
            <div class="ui form">
              <div class="field">
                <label id="formText">Details</label>
                <textarea
                  ref="additionalDetails"
                  type="text"
                  rows="1"
                  placeholder="Please add any necessary information here..."
                />
              </div>
            </div>
          </div>

          <div className="field">
            <div className="field">
              <div id="regBtn">
                <button
                  className="ui large fluid orange button"
                  onClick={this.register.bind(this)}
                >
                  Apply for an Admin Account
                </button>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="message" id="formText">
              New to Ticead Alba?
            </div>
            <div className="message" id="formText">
              <Link to={"/admin/reg"}>
                <p>Register for admin account today!</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
