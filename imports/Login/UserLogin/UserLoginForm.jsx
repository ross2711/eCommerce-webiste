import React from "react";
import { Message, Button } from "semantic-ui-react";
import { Accounts } from "meteor/accounts-base";
import { Link } from "react-router-dom";
import history from "../../History";

export default class UserLoginForm extends React.Component {
  handleSubmit(e) {
    debugger;
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let pass = this.refs.pass.value.trim();
    Meteor.loginWithPassword({ email }, pass, err => {
      if (!err) {
        history.push("/user/checkout");
      } else {
        debugger;
        alert("Invalid LoginCredentials, please try again");
      }
    });
  }

  render() {
    return (
      <div className="ui container" id="regForm">
        <Message
          id="userRegFormTitle"
          attached
          header="Welcome to Ticead Alba User Login"
          content="Fill out the form below and Register for a new User Account"
        />

        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="ui large form"
          id="personalInfo"
        >
          <h3 id="formText" className="ui inverted dividing header">
            User Login details
          </h3>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <label id="formText">E-mail</label>
                <input
                  required
                  ref="email"
                  type="text"
                  name="E-mail"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="field">
                <label id="formText">Password</label>
                <input
                  required
                  ref="pass"
                  type="text"
                  name="Password"
                  placeholder="Enter your Password"
                />
              </div>
            </div>
          </div>

          <h3 id="formText" className="ui inverted dividing header" />
          <div className="four fields">
            <div className="field">
              <div id="regBtn">
                <button className="ui large orange button" type="submit">
                  User Login
                </button>
              </div>
            </div>
            <div className="field" />
            <div className="field" />

            <div className="field">
              <div className="message" id="formText">
                New to Ticead Alba?
              </div>
              <div className="message" id="formText">
                <Link to={"/user/reg"}>
                  <p>Register today!</p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

