import React from "react";
import DropdownType from "../../DropdownType";
import { Dropdown } from "semantic-ui-react";

export default class EventDetails extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      genre: null
    };
  }

  getData(e) {
    var artist = this.refs.artist.value.trim();
    var price = Number(this.refs.price.value.trim());
    var tickets = Number(this.refs.tickets.value.trim());
    var gen = this.state.genre;
    debugger;
    this.props.passEventDetails(artist, price, tickets, gen);
  }

  render() {
    return (
      <div className="fields">
        <div className="five fields">
          <div className="field">
            <label id="formText">Genre</label>
            <Dropdown
              selection
              fluid
              options={[
                {
                  text: "rock",
                  value: "rock"
                },
                {
                  text: "pop",
                  value: "pop"
                },
                {
                  text: "electronic",
                  value: "electronic"
                }
              ]}
              onChange={(e, { value }) => {
                this.setState({ genre: value });
              }}
            />
          </div>
          <div className="field">
            <label id="formText">Event Type</label>
            <DropdownType />
          </div>
          <div className="field">
            <label id="formText">Artist</label>
            <input
              ref="artist"
              onChange={this.getData.bind(this)}
              type="text"
              name="artist"
              placeholder="Artist"
            />
          </div>

          <div className="field">
            <label id="formText">Price</label>
            <input
              ref="price"
              onChange={this.getData.bind(this)}
              type="Number"
              name="Price"
              placeholder="€"
            />
          </div>
          <div className="field">
            <label id="formText">No. of Tickets</label>
            <input
              ref="tickets"
              onChange={this.getData.bind(this)}
              type="Number"
              name="tickets"
              placeholder="number of tickets"
            />
          </div>
        </div>
      </div>
    );
  }
}
