import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Icon,
  Message,
  Dropdown,
  Component
} from "semantic-ui-react";

import EventTitle from "./NewEventFormComponents/EventTitle";
import EventDetails from "./NewEventFormComponents/EventDetails";
import EventInfo from "./NewEventFormComponents/EventInfo";
import VenueName from "./NewEventFormComponents/VenueName";
import EventImage from "./NewEventFormComponents/EventImage";
import Address from "./NewEventFormComponents/Address";
import Organiser from "./NewEventFormComponents/Organiser";
import ContactInfo from "./NewEventFormComponents/ContactInfo";
import Description from "./NewEventFormComponents/Description";
import Terms from "./NewEventFormComponents/Terms";
import SubmitBtn from "./NewEventFormComponents/SubmitBtn";
import { Events } from "/imports/api/events";

export default class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // signed_up: false,
      // signup_error: null,
      event: {
        title: "",
        artist: "",
        price: "",
        tickets: "",
        startDate: "",
        startTime: "",
        finishDate: "",
        finishTime: "",
        venueName: "",
        number: "",
        address: "",
        city: "",
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        description: "",
        image: "",
        admin: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.getData = this.getData.bind(this);
  }

  setEventData(key, value) {
    const newEvent = { ...this.state.event, [key]: value };
    this.setState({ event: newEvent });
  }

  passEventDetails(artist, price, tickets) {
    const newEvent = { ...this.state.event, artist, price, tickets };
    this.setState({ event: newEvent });
  }

  passEventInfo(startDate, startTime, finishDate, finishTime) {
    const newEvent = {
      ...this.state.event,
      startDate,
      startTime,
      finishDate,
      finishTime
    };
    this.setState({ event: newEvent });
  }

  passAddressData(number, address, city) {
    const newEvent = { ...this.state.event, number, address, city };
    this.setState({ event: newEvent });
  }

  passOrganiser(firstName, lastName) {
    const newEvent = { ...this.state.event, firstName, lastName };
    this.setState({ event: newEvent });
  }

  passContactInfo(email, telephone) {
    const newEvent = { ...this.state.event, email, telephone };
    this.setState({ event: newEvent });
  }

  passEventImage(image) {
    this.setState({ image });
  }

  // this.props.passData(number, address, city);
  // createEvent(e) {
  //   e.preventDefault();

  //   const event = this.state;
  //   debugger;
  //   // const event = { title: "first event", on: new Date() };
  //   Meteor.call("eventCreate", event, (err, eventId) => {
  //     if (!err) console.log("new event was created with _id", eventId);
  //     debugger;
  //   });
  // }

  componentWillMount() {
    var admin = Meteor.userId();
    debugger;
    if (admin) {
      this.setState({ admin });
    }
  }

  componentDidMount() {}

  handleSubmit(e) {
    e.preventDefault();
    Meteor.call("eventCreate", this.state.event, (err, eventId) => {
      if (!err) {
        const createdEvent = { ...this.state.event, _id: eventId };
        console.log("new event was created with _id", createdEvent);
        Cloudinary.upload(this.state.image, (imageError, uploadedImage) => {
          console.log(
            "image upload for event",
            eventId,
            imageError,
            uploadedImage
          );
          if (!imageError) {
            Meteor.call("eventUpdate", {
              ...createdEvent,
              image: uploadedImage.url,
              admin: Meteor.userId()
            });
          }
        });
      }
    });
  }

  render() {
    return (
      <div className="ui container" id="regForm">
        <Message
          id="adminRegFormTitle"
          attached
          header="Welcome to Ticead Alba New Event Form"
          content="To get started fill out the details of the event below"
        />

        <form className="ui huge form" id="personalInfo">
          <h3 id="formText" className="ui inverted dividing header">
            Event Title
          </h3>
          <EventTitle passEventTitle={this.setEventData.bind(this, "title")} />

          <h3 id="formText" className="ui inverted dividing header">
            Event Details
          </h3>
          <EventDetails passEventDetails={this.passEventDetails.bind(this)} />

          <h3 id="formText" className="ui inverted dividing header">
            Event Info
          </h3>
          <EventInfo passEventInfo={this.passEventInfo.bind(this)} />

          <label id="formText">Venue Name</label>
          <VenueName
            passVenueName={this.setEventData.bind(this, "venueName")}
          />

          <h3 id="formText" className="ui inverted dividing header">
            Event Image
          </h3>
          <EventImage passEventImage={this.passEventImage.bind(this)} />

          <h3 id="formText" className="ui inverted dividing header">
            Location
          </h3>
          <label id="formText">Address</label>
          <Address passAddressData={this.passAddressData.bind(this)} />

          <h3 id="formText" className="ui inverted dividing header">
            Organiser
          </h3>

          <Organiser passOrganiser={this.passOrganiser.bind(this)} />

          <h3 id="formText" className="ui inverted dividing header">
            Contact Info
          </h3>
          <ContactInfo passContactInfo={this.passContactInfo.bind(this)} />

          <h3 id="formText" className="ui inverted dividing header">
            Description of event
          </h3>
          <Description
            passDescription={this.setEventData.bind(this, "description")}
          />

          <h3 id="formText" className="ui inverted dividing header" />

          <div className="field">
            <div className="field">
              <Terms />
              {/*             <Link to="/admin/area">
                <button onClick={this.handleSubmit.bind(this)}>press</button>
              </Link>*/}
              {/*<SubmitBtn />*/}
              <Link to={"/admin/area"}>
                <Button
                  primary
                  floated="right"
                  onClick={this.handleSubmit.bind(this)}
                >
                  press
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

//   e.preventDefault();

//   this.setState({ email, telephone });
//   this.setState({ firstName, lastName });
//   this.setState({ number, address, city });
// // this.props.passData(number, address, city);
// passAddressData(number, address, city) {
// passContactInfo(email, telephone) {

// passOrganiser(firstName, lastName) {
// register(e) {
// }
// }
// }
// }

// createEvent() {
//   debugger
//   Meteor.call("eventCreate", event, (err, eventId) => {
//     if (!err) console.log("new event was created with _id", eventId);
//   });
// }

// // const event = { title: "first event", on: new Date() };
// componentWillMount() {
//   var admin = Meteor.userId();
//   if (admin) {
//     this.setState({ admin });
//   }
// }

// onSubmit={this.handleSubmit.bind(this)}

// Meteor.call("createUserInServer", title, err => {
//       if (err) {
//         console.log(err);
//         // this.setState({ signup_error: err });
//       } else {
//         Meteor.loginWithPassword(email, password, () => {
//           console.log("done");
//           // this.setState({ signed_up: true });
//         });
//       }
//     });
