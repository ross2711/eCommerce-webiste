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
  state = {
    visible: false,
    genre_filter: ["pop", "rock", "classical", "electronic"]
    // location: null
  };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  toggleGenres = (genre, checked) => {
    let new_genres;
    if (checked) {
      new_genres = [...this.state.genre_filter, genre];
    } else {
      new_genres = this.state.genre_filter.filter(g => g !== genre);
    }
    this.setState({ genre_filter: new_genres });
  };

  render() {
    const { visible } = this.state;
    const events_to_render = this.props.events.filter(event =>
      this.state.genre_filter.includes(event.genre)
    );
    // .filter(event => {
    //   if (!this.state.location) return true;
    //   return this.state.location === event.location;
    // });
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
                <Genre
                  selected={this.state.genre_filter}
                  toggle={this.toggleGenres}
                />
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
                    events={events_to_render}
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
