import React from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import history from "../History";

const trigger = (
  <span>
    <Icon name="user" /> Menu
  </span>
);

const options = [
  {
    key: "user",
    disabled: true
  },
  { key: "cart", text: "Cart" },
  { key: "logout", text: "Logout" },
  { key: "register as user", text: "Register as User" },
  { key: "adminLogin", text: "Admin Login" },
  { key: "adminArea", text: "Admin Area" }
];

const DropdownTrigger = props => (
  <Dropdown
    trigger={trigger}
    className="massive"
    options={options}
    onChange={function(e, data) {
      console.log("history", history);

      if (e.target.innerText === "Cart") {
        history.push("/cart");
        console.log("redirect to Cart");
      }

      if (e.target.innerText === "Login") {
        history.push("/user/login");
        console.log("redirect to User Login");
      }

      if (e.target.innerText === "Logout") {
        Meteor.logout();
        history.push("/");
        console.log("User or Admin Logout and redirect to home page");
      }

      if (e.target.innerText === "Register as User") {
        history.push("/user/reg");
        console.log("User reg, redirect to user reg page");
      }

      if (e.target.innerText === "Admin Login") {
        history.push("/admin/login");
        console.log("Admin login, redirect to admin login page");
      }
      if (e.target.innerText === "Admin Area") {
        history.push("/admin/area");
        console.log("Admin Area, redirect to admin area");
      }
    }}
  />
);

export default DropdownTrigger;
