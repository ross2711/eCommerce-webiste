import React, { Component } from "react";
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Item,
  Label
} from "semantic-ui-react";
import Genre from "./Genre";
import Type from "./Type";
import EventList from "./EventList";
import HeaderEvent from "./Header";

export default class SidebarLeftUncover extends React.Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div>
        <HeaderEvent />

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="uncover"
            visible={visible}
            icon="labeled"
            vertical
            inverted
          >
            <Menu.Item className="genre">
              <div id="filterEventContainer">
                <Icon size="big" className="music icon" />
                Music
              </div>
              <div className="">
                <Genre />
              </div>
            </Menu.Item>

            <Menu.Item className="location">
              <div id="filterEventContainer">
                <Icon size="big" className="location arrow" />
                Location
              </div>
              <div className="ui container" id="toggleBtnContainer">
                <div className="ui two column grid">
                  <div className="row">
                    <div className="column centered">
                      <select
                        name="skills"
                        multiple=""
                        className="ui inverted fluid dropdown"
                        id="cityDropdown"
                      >
                        <option value="">Select city</option>
                        <option value="glasgow">Glasgow</option>
                        <option value="edinburgh">Edinburgh</option>
                        <option value="aberdeen">Aberdeen</option>
                        <option value="inverness">Inverness</option>
                        <option value="perth">Perth</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </Menu.Item>

            <Menu.Item className="">
              <div id="filterEventContainer">
                <Icon size="big" name="microphone" />
                Artist
              </div>

              <div className="ui container">
                <div className="ui grid">
                  <div className="row">
                    <div className="ui one column centered">
                      <div className="ui icon input" id="filterSearch">
                        <input type="text" placeholder="Search Artists..." />
                        <Icon size="big" name="search" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Menu.Item>

            <Menu.Item className="type">
              <div id="filterEventContainer">
                <Icon size="big" name="question circle" />
                Event type
              </div>
              <div>
                <Type />
              </div>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <div>
                <Button onClick={this.toggleVisibility}>Filter Events</Button>
              </div>
              <Item.Group divided>
                <Menu.Item>
                  <EventList
                    events={this.props.events}
                    history={this.props.history}
                    addToCart={this.props.addToCart}
                  />
                </Menu.Item>
              </Item.Group>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
