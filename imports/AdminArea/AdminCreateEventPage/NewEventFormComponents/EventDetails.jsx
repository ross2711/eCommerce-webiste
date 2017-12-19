import React from "react";
import DropdownGenre from "../../DropdownGenre";
import DropdownType from "../../DropdownType";

export default class EventDetails extends React.Component {
  getData(e) {
    var artist = this.refs.artist.value.trim();
    var price = Number(this.refs.price.value.trim());
    var tickets = Number(this.refs.tickets.value.trim());
    debugger;
    this.props.passEventDetails(artist, price, tickets);
  }

  render() {
    return (
      <div className="fields">
        <div className="five fields">
          <div className="field">
            <label id="formText">Genre</label>
            <DropdownGenre />
            {/*passEventDetails={this.passEventDetails.bind(this)}*/}
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
