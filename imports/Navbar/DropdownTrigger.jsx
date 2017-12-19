import React from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import history from "../History";

// const trigger = <span>{/*    <Icon name="user" /> Hello, Ross*/}</span>;
const trigger = (
  <span>
    <Icon name="user" /> Login / Logout
  </span>
);

const options = [
  {
    key: "user",
    // text: <span>Signed in as <strong>Ross Fleming</strong></span>,
    disabled: true
  },
  { key: "login", text: "Login" },
  { key: "logout", text: "Logout" },
  { key: "register as user", text: "Register as User" },
  { key: "admin", text: "Admin Area" }
];

const DropdownTrigger = props => (
  <Dropdown
    trigger={trigger}
    className="massive"
    options={options}
    onChange={function(e, data) {
      console.log("history", history);

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

      if (e.target.innerText === "Admin Area") {
        history.push("/admin/login");
        console.log("Admin login, redirect to admin login page");
      }

      // if (e.target.innerText === "Logout") {
      //   history.push("/user/login");
      //   console.log("redirect to User Logout");
      // }

      // if (e.target.innerText === "")
    }}
  />
);

export default DropdownTrigger;

//   { key: "login", text: "Login" },
//   { key: "logout", text: "Logout" },
//   { key: "register as user", text: "Register as User" },
//   { key: "admin", text: "Admin Area" }

// import React from "react";
// import { Dropdown, Icon } from "semantic-ui-react";
// import { Link } from "react-router-dom";
// import history from "../History";
// // import DropdownTrigger from 'DropdownTrigger'

// const trigger = (
//   <span>
//     <Icon name="user" /> Hello
//   </span>
// );

// const options = [
//   {
//     key: "user",
//     // text: <span>Signed in as <strong>Ross Fleming</strong></span>,
//     disabled: true
//   },
//   // { key: "integrations", text: "Integrations" },
//   // { key: "help", text: "Help" },
//   // { key: "settings", text: "Settings" },
//   { key: "sign-out", text: "Sign Out" }
// ];

// const DropdownTrigger = props => (
//   <Dropdown
//     trigger={trigger}
//     className="massive"
//     options={options}
//     onChange={function(e, data) {
//       console.log("history", history);
//       if (e.target.innerText === "Sign Out") {
//         Meteor.logout();
//         history.push("/");
//         console.log("redirect to home page");
//         // <Link to={"/"} />;
//         // <Link to={`/users/${user.id}`} activeClassName="current">{user.name}</Link>
//       }
//     }}
//   />
// );

// export default DropdownTrigger;
