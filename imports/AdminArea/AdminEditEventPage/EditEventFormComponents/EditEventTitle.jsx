import React from "react";

export default props => {
  return (
    <div className="ui form">
      <label id="formText">Current Title</label>
      <div className="field">
        <input
          onChange={e => props.passEventTitle(e.target.value)}
          type="text"
          name="event name"
          placeholder={props.title}
        />
      </div>
    </div>
  );
};

// EditEventForm -> state = {title: 'test 1'}

// <EditEventTitle title={state.title} passEventTitle={(title) => this.setState({title})}/>
