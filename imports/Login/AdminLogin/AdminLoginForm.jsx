import React from "react";
import { Message } from "semantic-ui-react";
import { Accounts } from "meteor/accounts-base";
import { Link } from "react-router-dom";
// import { Meteor } from "meteor/meteor";

export default class AdminLoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let pass = this.refs.pass.value.trim();
    Meteor.loginWithPassword({ email }, pass);
  }

  render() {
    return (
      <div className="ui container" id="regForm">
        <Message
          id="userRegFormTitle"
          attached
          header="Welcome to Ticead Alba Admin Login"
          content="Fill out the form below and Register for a new Admin Account"
        />

        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="ui large form"
          id="personalInfo"
        >
          <h3 id="formText" className="ui inverted dividing header">
            Login details
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
              <button class="ui large orange button" type="submit">
                Login
              </button>
            </div>
            <div className="field" />
            <div className="field" />

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
          </div>
        </form>
      </div>
    );
  }
}
