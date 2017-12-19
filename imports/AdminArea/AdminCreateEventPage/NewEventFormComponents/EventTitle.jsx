import React from "react";

export default class EventTitle extends React.Component {
  getData(e) {
    var title = e.target.value;
    this.props.passEventTitle(title);
    debugger;
  }

  render() {
    return (
      <div className="ui form">
        <label id="formText">Title</label>
        <div className="field">
          <input
            onChange={this.getData.bind(this)}
            type="text"
            name="event name"
            placeholder="Give your event a short distinct name"
          />
        </div>
      </div>
    );
  }
}
