import React, { Component } from "react";
import { Icon, Button, Dropdown, Menu, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExampleSizeHuge extends Component {
  state = {
    activeItem: "home"
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="large">
        <Menu.Item>
          <img
            width={18}
            src="https://www.showclix.com/assets/partners/showclix/images/favicon.ico"
          />
        </Menu.Item>
        <Menu.Item>Ticead Alba</Menu.Item>

        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Icon size="small" name="home" />Home
        </Menu.Item>
      </Menu>
    );
  }
}
