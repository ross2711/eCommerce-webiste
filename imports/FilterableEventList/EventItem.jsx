import React from "react";
import { Link } from "react-router-dom";
// import history from "../History";
import { Button, Icon, Item, Label } from "semantic-ui-react";

export default class EventItem extends React.Component {
  addToCart() {
    debugger;
    this.props.addToCart(this.props.id);
  }
  render() {
    debugger;
    return (
      <div className="container eventBox">
        <Item.Group divided>
          <Item>
            <Item.Image height={80} size="medium" src={this.props.image} />
            <Item.Content>
              <Item.Header as="a">Event: {this.props.title}</Item.Header>
              <Item.Meta>
                <span className="cinema">Artist: {this.props.artist}</span>
              </Item.Meta>
              <Item.Meta>
                <span className="cinema">Event info:</span>
                <span className="cinema">
                  Start: {this.props.startDate} @ {this.props.startTime}
                </span>
                <span className="cinema">
                  Finish: {this.props.finishDate} @ {this.props.finishTime}
                </span>
              </Item.Meta>
              <Item.Meta>
                <span className="cinema">Description:</span>
                <span className="cinema">{this.props.description}</span>
              </Item.Meta>
              <Item.Meta>
                <span className="cinema">Venue: {this.props.venueName}</span>
              </Item.Meta>
              <Item.Description>
                Address: {this.props.number}, {this.props.address}, City:{" "}
                {this.props.city}
              </Item.Description>
              <Item.Meta>
                <span className="cinema">Genre:</span>
              </Item.Meta>
              <Item.Meta>
                <span className="cinema">
                  Ticket Price: €{this.props.price}
                </span>
              </Item.Meta>
              <Item.Extra>
                <Link to={"/cart"}>
                  <Button
                    onClick={this.addToCart.bind(this)}
                    primary
                    floated="right"
                  >
                    Buy tickets
                    <Icon name="right chevron" />
                  </Button>
                </Link>

                <Label>Limited Availability</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <div className="ui inverted divider" />
      </div>
    );
  }
}
