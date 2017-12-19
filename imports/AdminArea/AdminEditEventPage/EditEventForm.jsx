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

import EditEventTitle from "./EditEventFormComponents/EditEventTitle";
// import EditEventDetails from "./EditEventFormComponents/EditEventDetails";
import EditEventInfo from "./EditEventFormComponents/EditEventInfo";
import EditVenueName from "./EditEventFormComponents/EditVenueName";
import EditEventImage from "./EditEventFormComponents/EditEventImage";
import EditAddress from "./EditEventFormComponents/EditAddress";
import EditOrganiser from "./EditEventFormComponents/EditOrganiser";
import EditContactInfo from "./EditEventFormComponents/EditContactInfo";
import EditDescription from "./EditEventFormComponents/EditDescription";
import EditTerms from "./EditEventFormComponents/EditTerms";
import EditBtn from "./EditEventFormComponents/EditBtn";
import EditNumber from "./EditEventFormComponents/EditNumber";
import EditCity from "./EditEventFormComponents/EditCity";
import EditFirstName from "./EditEventFormComponents/EditFirstName";
import EditLastName from "./EditEventFormComponents/EditLastName";
import EditTelephone from "./EditEventFormComponents/EditTelephone";
import EditEmail from "./EditEventFormComponents/EditEmail";
import EditArtist from "./EditEventFormComponents/EditArtist";
import EditPrice from "./EditEventFormComponents/EditPrice";
import EditTickets from "./EditEventFormComponents/EditTickets";

import DropdownGenre from "../DropdownGenre";
import DropdownType from "../DropdownType";

import { Events } from "/imports/api/events";

export default class EditEventForm extends React.Component {
  constructor(props) {
    debugger;
    super(props);

    this.state = {
      event: props.event
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  passEventTitle(title) {
    const updatedEvent = { ...this.state.event, title };
    this.setState({ event: updatedEvent }, () => {
      console.log(this.state);
    });
  }

  // passEventDetails(artist, price, tickets) {
  //   this.setState({ artist, price, tickets });
  // }

  passEventInfo(startDate, startTime, finishDate, finishTime) {
    this.setState({ startDate, startTime, finishDate, finishTime });
  }

  passEditEventImage(image) {
    debugger;
    const updatedEvent = { ...this.state.event, image };
    this.setState({ event: updatedEvent }, () => {
      console.log("image", this.state);
    });
  }

  passVenueName(venueName) {
    const updatedEvent = { ...this.state.event, venueName };
    this.setState({ event: updatedEvent }, () => {
      console.log(this.state);
    });
  }

  passNumber(number) {
    debugger;
    const updatedEvent = { ...this.state.event, number };
    this.setState({ event: updatedEvent }, () => {
      console.log("here", this.state);
    });
  }

  passAddress(address) {
    debugger;
    const updatedEvent = { ...this.state.event, address };
    this.setState({ event: updatedEvent }, () => {
      console.log("here", this.state);
    });
  }

  passCity(city) {
    debugger;
    const updatedEvent = { ...this.state.event, city };
    this.setState({ event: updatedEvent }, () => {
      console.log("here", this.state);
    });
  }
  // passAddressData(number, address, city) {
  //   this.setState({ number, address, city });
  // }

  passFirstName(firstName) {
    debugger;
    const updatedEvent = { ...this.state.event, firstName };
    this.setState({ event: updatedEvent }, () => {
      console.log("here", this.state);
    });
  }

  passLastName(lastName) {
    debugger;
    const updatedEvent = { ...this.state.event, lastName };
    this.setState({ event: updatedEvent }, () => {
      console.log("here", this.state);
    });
  }

  passEmail(email) {
    debugger;
    const updatedEvent = { ...this.state.event, email };
    this.setState({ event: updatedEvent }, () => {
      console.log("here", this.state);
    });
  }

  passTelephone(telephone) {
    debugger;
    const updatedEvent = { ...this.state.event, telephone };
    this.setState({ event: updatedEvent }, () => {
      console.log("here", this.state);
    });
  }

  passDescription(description) {
    const updatedEvent = { ...this.state.event, description };
    this.setState({ event: updatedEvent }, () => {
      console.log(this.state);
    });
  }

  passArtist(artist) {
    const updatedEvent = { ...this.state.event, artist };
    this.setState({ event: updatedEvent }, () => {
      console.log(this.state);
    });
  }

  passPrice(price) {
    const updatedEvent = { ...this.state.event, price };
    this.setState({ event: updatedEvent }, () => {
      console.log(this.state);
    });
  }

  passTickets(tickets) {
    const updatedEvent = { ...this.state.event, tickets };
    this.setState({ event: updatedEvent }, () => {
      console.log(this.state);
    });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   Meteor.call("eventUpdate", this.state.event, (err, _id) => {
  //     if (!err) console.log("event updated with _id", _id);
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    Meteor.call("eventUpdate", this.state.event, (err, eventId) => {
      if (!err) {
        const updatedEvent = { ...this.state, _id: eventId };
        console.log("event updated with _id", updatedEvent);
        Cloudinary.upload(
          this.state.event.image,
          (imageError, uploadedImage) => {
            console.log(
              "image upload for event",
              eventId,
              imageError,
              uploadedImage
            );
            if (!imageError) {
              Meteor.call("eventUpdate", {
                ...updatedEvent,
                image: uploadedImage.url,
                admin: Meteor.userId()
              });
            }
          }
        );
      }
    });
  }

  render() {
    debugger;
    return (
      <div className="ui container" id="regForm">
        <Message
          id="adminRegFormTitle"
          attached
          header="Welcome to Ticead Alba Edit Event Form"
          content="Fill out the fields below which you require editing"
        />

        <form className="ui huge form" id="personalInfo">
          <h3 id="formText" className="ui inverted dividing header">
            Event Title
          </h3>
          <EditEventTitle
            title={this.state.event.title}
            passEventTitle={this.passEventTitle.bind(this)}
          />

          <h3 id="formText" className="ui inverted dividing header">
            Event Details
          </h3>

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
              <EditArtist
                artist={this.state.event.artist}
                passArtist={this.passArtist.bind(this)}
              />

              <EditPrice
                price={this.state.event.price}
                passPrice={this.passPrice.bind(this)}
              />
              <EditTickets
                tickets={this.state.event.tickets}
                passTickets={this.passTickets.bind(this)}
              />
            </div>
          </div>

          {/*<EditEventDetails
            artist={this.state.artist}
            price={this.state.price}
            tickets={this.state.tickets}
            passEventDetails={this.passEventDetails.bind(this)}
          />
*/}
          <h3 id="formText" className="ui inverted dividing header">
            Event Info
          </h3>
          <EditEventInfo
            startDate={this.state.startDate}
            startTime={this.state.startTime}
            finishDate={this.state.finishDate}
            finishTime={this.state.finishTime}
            passEventInfo={this.passEventInfo.bind(this)}
          />

          <label id="formText">Venue Name</label>
          <EditVenueName
            venueName={this.state.event.venueName}
            passVenueName={this.passVenueName.bind(this)}
          />

          <h3 id="formText" className="ui inverted dividing header">
            Event Image
          </h3>
          <EditEventImage
            passEditEventImage={this.passEditEventImage.bind(this)}
          />

          <h3 id="formText" className="ui inverted dividing header">
            Location
          </h3>
          <label id="formText">Address</label>
          <div className="fields">
            <EditNumber
              number={this.state.event.number}
              passNumber={this.passNumber.bind(this)}
            />
            <EditAddress
              address={this.state.event.address}
              passAddress={this.passAddress.bind(this)}
            />
            <EditCity
              city={this.state.event.city}
              passCity={this.passCity.bind(this)}
            />
          </div>
          {/*          <EditAddress
            number={this.state.number}
            address={this.state.address}
            city={this.state.city}
            passAddressData={this.passAddressData.bind(this)}
          />*/}

          <h3 id="formText" className="ui inverted dividing header">
            Organiser
          </h3>
          <div className="two fields">
            <EditFirstName
              firstName={this.state.event.firstName}
              passFirstName={this.passFirstName.bind(this)}
            />
            <EditLastName
              lastName={this.state.event.lastName}
              passLastName={this.passLastName.bind(this)}
            />
          </div>

          {/* <EditOrganiser
            firstName={this.state.firstName}
            secondName={this.state.secondName}
            passOrganiser={this.passOrganiser.bind(this)}
          />*/}

          <h3 id="formText" className="ui inverted dividing header">
            Contact Info
          </h3>
          <div className="fields">
            <div className="two fields">
              <EditEmail
                email={this.state.event.email}
                passEmail={this.passEmail.bind(this)}
              />
              <EditTelephone
                telephone={this.state.event.telephone}
                passTelephone={this.passTelephone.bind(this)}
              />
            </div>
          </div>
          {/*          <EditContactInfo
            email={this.state.email}
            telephone={this.state.telephone}
            passContactInfo={this.passContactInfo.bind(this)}
          />*/}

          <h3 id="formText" className="ui inverted dividing header">
            Description of event
          </h3>
          <EditDescription
            description={this.state.event.description}
            passDescription={this.passDescription.bind(this)}
          />

          <h3 id="formText" className="ui inverted dividing header" />

          <div className="field">
            <div className="field">
              <EditTerms />
              <button onClick={this.handleSubmit.bind(this)}>press</button>
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

// passOrganiser(firstName, lastName) {
//   this.setState({ firstName, lastName });
// }

// passContactInfo(email, telephone) {
//   this.setState({ email, telephone });
// }

// this.props.passData(number, address, city);
// createEvent(e) {
//   e.preventDefault();
//   // const event = this.state;

//   // const event = { title: "first event", on: new Date() };
//   // Meteor.call("eventUpdated", event, err => {
//   //   if (!err) console.log("event updated with _id", eventId);
//   // });
// }

// if(!this.state.genre){
//   genre = Events.findOne({_id:id}).genre
// }
// if (!this.state.type) {
//   type = Events.findOne({ _id: id }).type;
// }

// if (!this.state.startDate) {
//   startDate = Events.findOne({ _id: id }).startDate;
// }
// if (!this.state.startTime) {
//   startTime = Events.findOne({ _id: id }).startTime;
// }
// if (!this.state.finishDate) {
//   finishDate = Events.findOne({ _id: id }).finishDate;
// }
// if (!this.state.finishTime) {
//   finishTime = Events.findOne({ _id: id }).finishTime;
// }

//const data = {key: 1, _id: 'adsfadsf', likes: 1};
//const newData = {...data, name: 'foysal', mentor: true, likes: 2};
// { key: 1, _id: 'adsfadsf', likes: 2, name: 'foysal', mentor: true }

// componentWillMount() {
//   var admin = Meteor.userId();

//   if (admin) {
//     this.setState({ admin });
//   }
// }
