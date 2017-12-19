import React from "react";
import "../../client/main.css";
import "../../client/main.html";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      //       <div class="ui grey menu">
      //   <a class="red item active">Test</a>
      // </div>
      <div className="ui teal inverted vertical footer segment">
        <div className="ui center aligned container">
          <div className="ui stackable inverted divided grid">
            <div className="three wide column">
              <h4 className="ui inverted header">Lorem ipsum dolor 1</h4>
              <div className="ui grey item active inverted link list">
                <a href="#" className="grey item active">
                  Link One
                </a>
                <a href="#" className="grey item active">
                  Link Two
                </a>
                <a href="#" className="grey item active">
                  Link Three
                </a>
                <a href="#" className="grey item active">
                  Link Four
                </a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Lorem ipsum dolor 2</h4>
              <div className="ui inverted link list">
                <a href="#" className="grey item active">
                  Link One
                </a>
                <a href="#" className="grey item active">
                  Link Two
                </a>
                <a href="#" className="grey item active">
                  Link Three
                </a>
                <a href="#" className="grey item active">
                  Link Four
                </a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Lorem ipsum dolor 3</h4>
              <div className="ui inverted link list">
                <a href="#" className="grey item active">
                  Link One
                </a>
                <a href="#" className="grey item active">
                  Link Two
                </a>
                <a href="#" className="grey item active">
                  Link Three
                </a>
                <a href="#" className="grey item active">
                  Link Four
                </a>
              </div>
            </div>
            <div className="seven wide column">
              <h2 className="ui inverted header">Ticead Alba</h2>
              <p>Buy Tickets for the best gigs in Scotland</p>
              <div className="ui inverted link list">
                {!Meteor.userId() && (
                  <Link className="grey item active" to="/admin/reg">
                    Are you an event organiser? Apply for an admin account with
                    us!
                  </Link>
                )}
              </div>
            </div>
            <div className="ui inverted section divider" />
            <img
              src="http://res.cloudinary.com/db8xttzan/image/upload/v1512645165/favicon_vxnyjx.ico"
              className="ui centered tiny image"
            />
            <div>
              <div className="ui horizontal inverted small divided link list">
                <a className="grey item active" href="#">
                  Site Map
                </a>
                <a className="grey item active" href="#">
                  Contact Us
                </a>
                <a className="grey item active" href="#">
                  Terms and Conditions
                </a>
                <a className="grey item active" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
