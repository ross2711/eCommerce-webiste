import React from "react";
import DropdownGenre from "../../DropdownGenre";
import DropdownType from "../../DropdownType";

export default class EditEventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: props.artist,
      price: props.price,
      tickets: props.tickets
    };
  }

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
              placeholder={this.state.artist}
            />
          </div>

          <div className="field">
            <label id="formText">Price</label>
            <input
              ref="price"
              onChange={this.getData.bind(this)}
              type="Number"
              name="Price"
              placeholder={this.state.price}
            />
          </div>
          <div className="field">
            <label id="formText">No. of Tickets</label>
            <input
              ref="tickets"
              onChange={this.getData.bind(this)}
              type="Number"
              name="tickets"
              placeholder={this.state.tickets}
            />
          </div>
        </div>
      </div>
    );
  }
}



