import React from "react";
import { Dropdown } from "semantic-ui-react";

logOptions = [
  {
    text: "Login",
    value: "Login",
    image: { avatar: true, src: "/assets/images/avatar/small/jenny.jpg" }
  },
  {
    text: "Logout",
    value: "Logout",
    image: { avatar: true, src: "/assets/images/avatar/small/jenny.jpg" }
  }
];

const LoginLogout = () => (
  <Dropdown placeholder="Login-Logout" fluid selection options={logOptions} />
);

export default LoginLogout;
