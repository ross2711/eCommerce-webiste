import React, { Component } from "react";
import { Dropdown, Grid, Segment } from "semantic-ui-react";

const options = [
  { key: 1, text: "One Tickets", value: 1 },
  { key: 2, text: "Two Tickets", value: 2 },
  { key: 3, text: "Three Tickets", value: 3 },
  { key: 4, text: "four Tickets", value: 4 }
];

export default class TicketDropdown extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Dropdown
            onChange={this.handleChange}
            options={options}
            placeholder="how many tickets"
            selection
            value={value}
          />
        </Grid.Column>
        <Grid.Column>
          <div>
            <h2 id="ticketNumber">No. of tickets: {value}</h2>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}
