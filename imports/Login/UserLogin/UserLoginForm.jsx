import React from "react";
import { Message, Button } from "semantic-ui-react";
import { Accounts } from "meteor/accounts-base";
import { Link } from "react-router-dom";
// import { Meteor } from "meteor/meteor";

export default class UserLoginForm extends React.Component {
  handleSubmit(e) {
    debugger;
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let pass = this.refs.pass.value.trim();
    Meteor.loginWithPassword({ email }, pass, err => {
      debugger;
    });
  }

  render() {
    return (
      <div className="ui container" id="regForm">
        <Message
          id="userRegFormTitle"
          attached
          header="Welcome to Ticead Alba User Login"
          content="Fill out the form below and Register for a new User Account"
        />

        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="ui large form"
          id="personalInfo"
        >
          <h3 id="formText" className="ui inverted dividing header">
            Login details
          </h3>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <label id="formText">E-mail</label>
                <input
                  required
                  ref="email"
                  type="text"
                  name="E-mail"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="field">
                <label id="formText">Password</label>
                <input
                  required
                  ref="pass"
                  type="text"
                  name="Password"
                  placeholder="Enter your Password"
                />
              </div>
            </div>
          </div>

          <h3 id="formText" className="ui inverted dividing header" />
          <div className="four fields">
            <div className="field">
              {/*<div id="regBtn">*/}
              <Link to={"/user/checkout"}>
                <Button class="ui large orange button" type="submit">
                  Login
                </Button>
              </Link>

              {/*</div>*/}
            </div>
            <div className="field" />
            <div className="field" />

            <div className="field">
              <div className="message" id="formText">
                New to Ticead Alba?
              </div>
              <div className="message" id="formText">
                <Link to={"/user/reg"}>
                  <p>Register today!</p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

//     <form className="ui large form">
//       <div className="ui stacked segment">
//         <div className="field">
//           <div className="ui left icon input">
//             <i className="user icon"></i>
//             <input type="text" name="email" placeholder="E-mail address"/>
//           </div>
//         </div>
//         <div className="field">
//           <div className="ui left icon input">
//             <i className="lock icon"></i>
//             <input type="password" name="password" placeholder="Password"/>
//           </div>
//         </div>
//         <div className="ui fluid large teal submit button">User Login</div>
//       </div>

//       <div className="ui error message"></div>
//     </form>

//     <div className="ui message">
//       New to us? <a href="#">Sign Up</a>
//     </div>
//   </div>
// </div>

// <h2 className="ui teal image header">
//        <img src="assets/images/logo.png" className="image" />
//        <div className="content">
//          Log-in to your Ticead Alba account
//        </div>
//      </h2>

//         import React from 'react'
// import { Button, Form, Icon, Message, Dropdown, Component } from 'semantic-ui-react'
// import DropdownTitle from '../DropdownTitle'

// const UserReg = () => (
//   <div className="ui container" id="regForm">
//     <Message
//       id="userRegFormTitle"
//       attached
//       header='Welcome to Ticead Alba User Registration'
//       content='Fill out the form below and Register for a new User Account'
//     />

//     <form className="ui large form" id="personalInfo">
//       <h3 id="formText" className="ui inverted dividing header">Personal Info</h3>
//         <div className="three fields">
//           <div className="field">
//             <label id="formText">Title</label>
//               <DropdownTitle/>
//           </div>
//           <div className="field">
//           <label id="formText">First Name</label>
//             <input type="text" name="shipping[first-name]" placeholder="First Name"/>
//           </div>
//           <div className="field">
//           <label id="formText">Last Name</label>
//             <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
//           </div>
//         </div>

//       <h3 id="formText" className="ui inverted dividing header">Account Info</h3>
//       <div className="field">
//         <div className="two fields">
//           <div className="field">
//             <label id="formText" >E-mail</label>
//             <input type="text" name="E-mail" placeholder="example@gmail.com"/>
//           </div>
//           <div className="field">
//            <label id="formText">Password</label>
//             <input type="text" name="Password" placeholder="Create Password"/>
//           </div>
//         </div>
//       </div>

//         <h3 id="formText" className="ui inverted dividing header">Terms</h3>
//           <div className="field">
//             <div class="field">
//               <div class="ui inverted checkbox">
//                 <input type="checkbox" id="terms" />
//                 <label id="formText" for="terms">I agree to the terms and conditions</label>
//               </div>
//             </div>
//           <div id="regBtn">
//           <button class="ui large orange button" type="submit">Register</button>
//         </div>
//       </div>
//     </form>
//   </div>
