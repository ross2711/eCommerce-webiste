import React from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import history from "../History";
// import DropdownTrigger from 'DropdownTrigger'

const trigger = (
  <span>
    <Icon name="user" /> Admin Menu
  </span>
);

const options = [
  {
    key: "user",
    // text: <span>Signed in as <strong>Ross Fleming</strong></span>,
    disabled: true
  },
  // { key: "integrations", text: "Integrations" },
  // { key: "help", text: "Help" },
  { key: "orders", text: "Orders Summary" },
  { key: "sign-out", text: "Sign Out" }
];

const DropdownTrigger = props => (
  <Dropdown
    trigger={trigger}
    className="massive"
    options={options}
    onChange={function(e, data) {
      console.log("history", history);
      if (e.target.innerText === "Orders Summary") {
        Meteor.logout();
        history.push("/admin/orders");
        console.log("redirect to home page");
      }
      if (e.target.innerText === "Sign Out") {
        Meteor.logout();
        history.push("/");
        console.log("redirect to home page");
      }
    }}
  />
);

export default DropdownTrigger;

// <Link to="/admin/create/event">
//              <button
//                className="ui large fluid orange button"
//                type="submit"
//              >
//                Create New Event
//              </button>
//            </Link>

// onChange={function(e, data) {
//      console.log("DROPDOWN CHANGE:", e.target, data.value, data.options);
//      console.dir(data);
//      console.log("VALUE", e.target.innerText);
