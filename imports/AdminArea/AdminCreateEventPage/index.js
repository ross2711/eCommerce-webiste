import React from "react";
import NavbarAdminCreateNewEvent from "./../../Navbar/NavbarAdminCreateNewEvent";
import NewEventForm from "./NewEventForm";
import CreateNewEventHeader from "./CreateNewEventHeader";
import Footer from "./../../Footer/Footer";

export default class AdminCreateEventPage extends React.Component {
  render() {
    return (
      <div>
        <div className="ui grid centered" id="adminAreaForm">
          <div className="sixteen wide column">
            <div className="NavbarRegForm">
              <NavbarAdminCreateNewEvent />
            </div>
          </div>

          <div className="sixteen wide column">
            <CreateNewEventHeader />
          </div>

          <div className="nine wide column">
            <div>
              <NewEventForm />
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
  }
}
