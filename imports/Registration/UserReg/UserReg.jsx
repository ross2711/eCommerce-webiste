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

export default class UserReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signed_up: false,
      signup_error: null,
      country: "",
      title: ""
    };
    this.getData = this.getData.bind(this);
  }

  getData(country) {
    this.setState({ country });
  }

  register = e => {
    e.preventDefault();
    this.getData();
    debugger;

    var firstName = this.refs.firstName.value.trim();
    var lastName = this.refs.lastName.value.trim();
    var email = this.refs.email.value.trim();
    var password = this.refs.password.value.trim();
    var country = this.state.country;
    var title = this.state.title;

    var profile = {
      admin: false,
      firstName,
      lastName,
      email,
      password,
      country,
      title
    };

    console.log(email, password, profile);

    Meteor.call("createUserInServer", email, password, profile, err => {
      debugger;
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
  };

  render() {
    if (this.state.signed_up) {
      return <Redirect to="/" />;
    }
    return (
      <div className="ui container" id="regForm">
        <Message
          id="userRegFormTitle"
          attached
          header="Welcome to Ticead Alba User Registration"
          content="Fill out the form below and Register for a new User Account"
        />

        <form
          onSubmit={this.register}
          className="ui large form"
          id="personalInfo"
        >
          <h3 id="formText" className="ui inverted dividing header">
            Personal Info
          </h3>
          <div className="three fields">
            <div className="field">
              <label id="formText">Title</label>
              <Dropdown
                selection
                fluid
                options={[
                  {
                    text: "Mr",
                    value: "Mr"
                  },
                  {
                    text: "Mrs",
                    value: "Mrs"
                  },
                  {
                    text: "Miss",
                    value: "Miss"
                  }
                ]}
                onChange={(e, { value }) => {
                  this.setState({ title: value });
                }}
              />
            </div>
            <div className="field">
              <label id="formText">First Name</label>
              <input
                ref="firstName"
                type="text"
                name="shipping[first-name]"
                placeholder="First Name"
              />
            </div>
            <div className="field">
              <label id="formText">Last Name</label>
              <input
                ref="lastName"
                type="text"
                name="shipping[last-name]"
                placeholder="Last Name"
              />
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
                  placeholder="example@gmail.com"
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
            Terms
          </h3>
          <div className="field">
            <div className="field">
              <div className="ui inverted checkbox">
                <input type="checkbox" id="terms" />
                <label id="formText" for="terms">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
            <div id="regBtn">
              <button className="ui large orange button" type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

