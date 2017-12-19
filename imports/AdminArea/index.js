import React from "react";
import NavbarAdminPage from "./../Navbar/NavbarAdminPage";
import CurrentEvents from "./CurrentEvents";
import AdminEventList from "./AdminEventList";
import CreateNewEventBtn from "./CreateNewEventBtn";
import Footer from "../Footer/Footer";
import { Events } from "../api/events";

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    // perf.start();
    Tracker.autorun(() => {
      var admin = Meteor.userId();
      var events = Events.find({ admin: admin }).fetch();
      this.setState({ events });
      debugger;
    });
  }

  removeEvent(id) {
    Events.remove({ _id: id });
  }

  render() {
    return (
      <div>
        <div className="ui grid centered" id="adminAreaForm">
          <div className="sixteen wide column">
            <div className="NavbarRegForm">
              <NavbarAdminPage />
            </div>
          </div>

          <div className="sixteen wide column" id="newEventPadding">
            <CreateNewEventBtn />
          </div>
        </div>
        <div className="ui grid centered">
          <div className="sixteen wide column">
            <CurrentEvents />
          </div>

          <div className="sixteen wide column">
            <AdminEventList
              events={this.state.events}
              removeEvent={this.removeEvent}
              history={this.props.history}
            />
          </div>

          <div className="sixteen wide column">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
