import React from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import history from "../History";

const trigger = (
  <span>
    <Icon name="user" /> Admin Menu
  </span>
);

const options = [
  {
    key: "user",
    disabled: true
  },
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
