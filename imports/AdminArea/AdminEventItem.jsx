import React from "react";
import { Button, Icon, Item, Label } from "semantic-ui-react";
import { Router, Route, IndexRoute, browserHistory } from "react-router-dom";
import { Events } from "../api/events";

export default class AdminEventItem extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ""
    };
  }

  getId(id) {
    debugger;
    this.props.removeEvent(id);
  }

  setEvent() {
    this.props.updateEvent(this.props.id, this.state.data);
  }
  redirect() {
    this.props.history.push({
      pathname: "/admin/edit/event",
      query: { id: this.props.id }
    });
  }

  render() {
    return (
      <div className="container eventBox">
        <Item.Group divided>
          <Item>
            <Item.Image size="medium" src={this.props.image} />
            <Item.Content>
              <Item.Header as="a">Event: {this.props.title}</Item.Header>
              <Item.Meta>
                <span className="cinema">
                  Event info: {this.props.startDate} @ {this.props.startTime}{" "}
                  until {this.props.finishDate} @ {this.props.finishTime}
                </span>
              </Item.Meta>
              <Item.Meta>
                <span className="cinema">
                  Description : {this.props.description}
                </span>
              </Item.Meta>
              <Item.Meta>
                <span className="cinema">Venue: {this.props.venueName}</span>
              </Item.Meta>
              <Item.Description>
                Address: {this.props.number} {this.props.address}, City:
                {this.props.city}
              </Item.Description>
              <Item.Meta>
                <span className="cinema">Artist: {this.props.artist}</span>
              </Item.Meta>
              <Item.Meta>
                <span className="cinema">Genre: {this.props.genre}</span>
              </Item.Meta>
              <Item.Meta>
                <span className="cinema">Type: </span>
              </Item.Meta>
              <Item.Meta>
                <span className="cinema">
                  Main Contact Details. Name:{this.props.firstName}{" "}
                  {this.props.lastName}, Telephone Number:{" "}
                  {this.props.telephone}, E-mail: {this.props.email}
                </span>
              </Item.Meta>
              <Item.Extra>
                <Button
                  onClick={this.redirect.bind(this)}
                  id="btnText"
                  className="ui large green button"
                  floated="right"
                >
                  <Icon name="edit" />
                </Button>

                <Button
                  className="ui large red button"
                  floated="right"
                  onClick={this.getId.bind(this, this.props.id)}
                >
                  Delete Event &nbsp;
                  <i className="trash icon" />
                </Button>
                <Label className="ui orange large">
                  total tickets: ,
                  <p className="ui grey header centered massive">
                    {this.props.tickets} @ €{this.props.price}
                  </p>
                </Label>
                <Label className="ui yellow large">
                  tickets remaining:{" "}
                  <p className="ui red header centered massive">
                    {this.props.tickets}
                  </p>
                </Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <div className="ui inverted divider" />
      </div>
    );
  }
}
