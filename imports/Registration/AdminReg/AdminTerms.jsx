import React from "react";
import {
  Button,
  Form,
  Icon,
  Message,
  Dropdown,
  Component
} from "semantic-ui-react";

const AdminReg = () => (
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
              type="text"
              name="shipping[first-name]"
              placeholder="First Name"
            />
          </div>
          <div className="field">
            <input
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
              type="text"
              name="E-mail"
              placeholder="example@company.com"
            />
          </div>
          <div className="field">
            <label id="formText">Password</label>
            <input type="text" name="Password" placeholder="Create Password" />
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
            <input type="text" name="company" placeholder="Company Name" />
          </div>
          <div className="field">
            <label id="formText">Business Type</label>
            <input type="text" name="business" placeholder="Business Type" />
          </div>
        </div>

        <label id="formText">Address</label>
        <div className="fields">
          <div className="four wide field">
            <input type="text" name="shipping[address]" placeholder="Number" />
          </div>
          <div className="twelve wide field">
            <input
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
          <input type="text" name="city" placeholder="City" />
        </div>
        <div className="field">
          <label id="formText">Country</label>
          <DropdownCountry />
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
              type="text"
              rows="1"
              placeholder="Please add any necessary information here..."
            />
          </div>
        </div>
      </div>

      <div className="field">
        <div className="field">
          {/*          <div className="ui inverted checkbox">
            <input type="checkbox" id="terms" />
            <label id="formText" for="terms">I agree to the terms and conditions</label>
          </div>*/}
          <div id="regBtn">
            <button className="ui large fluid orange button" type="submit">
              Apply for an Admin Account
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default AdminReg;
