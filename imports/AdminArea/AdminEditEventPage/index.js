import React from "react";
import NavbarEditEventPage from "./../../Navbar/NavbarEditEventPage";
import EditEventForm from "./EditEventForm";
import EditEventHeader from "./EditEventHeader";
import EditEventTitle from "./EditEventFormComponents/EditEventTitle";
import EditNumber from "./EditEventFormComponents/EditNumber";
import EditCity from "./EditEventFormComponents/EditCity";
import EditFirstName from "./EditEventFormComponents/EditFirstName";
import EditLastName from "./EditEventFormComponents/EditLastName";
import EditTelephone from "./EditEventFormComponents/EditTelephone";
import EditEmail from "./EditEventFormComponents/EditEmail";
import EditArtist from "./EditEventFormComponents/EditArtist";
import EditPrice from "./EditEventFormComponents/EditPrice";
import EditTickets from "./EditEventFormComponents/EditTickets";
import Footer from "./../../Footer/Footer";
import { Events } from "../../api/events";

export default class EditAdminEventPage extends React.Component {
  constructor() {
    super();
    this.state = {
      event: null
    };
  }

  updateEvent() {
    event = this.props.location.query.id;
    debugger;
  }

  componentDidMount() {
    debugger;
    Tracker.autorun(() => {
      var event = Events.findOne({ _id: this.props.location.query.id });
      debugger;
      this.setState({ event });
    });
  }

  render() {
    if (this.state.event) {
      return (
        <div>
          <div className="ui grid centered" id="adminAreaForm">
            <div className="sixteen wide column">
              <div className="NavbarRegForm">
                <NavbarEditEventPage />
              </div>
            </div>

            <div className="sixteen wide column">
              <EditEventHeader />
            </div>

            <div className="nine wide column">
              <div>
                <EditEventForm event={this.state.event} />
              </div>
            </div>
          </div>
          <div className="ui grid centered">
            <div className="sixteen wide column">
              <Footer />
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}
