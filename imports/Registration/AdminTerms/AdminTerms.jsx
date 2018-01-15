import React from "react";
import LoremIpsumHoldingText from "./LoremIpsumHoldingText";
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
      header="Welcome to Ticead Alba"
      content="Please read the Terms and Conditions before applying for an Admin Account"
    />

    <form className="ui huge form" id="personalInfo">
      <h3 id="formText" className="ui inverted centered dividing header">
        Terms and Conditions
      </h3>
      <div className="ui form">
        <div id="formTextHoldingText">
          <LoremIpsumHoldingText />
        </div>
        <div id="formTextHoldingText">
          <LoremIpsumHoldingText />
        </div>
        <div id="formTextHoldingText">
          <LoremIpsumHoldingText />
        </div>
      </div>

      <h3 id="formText" className="ui inverted dividing header" />

      <div className="field">
        <div className="field">
          <div className="ui inverted checkbox">
            <input type="checkbox" id="terms" />
            <label id="formText" for="terms">
              I agree to the terms and conditions
            </label>
          </div>
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
