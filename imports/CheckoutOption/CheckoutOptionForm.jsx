import React from "react";
import {
  Button,
  Form,
  Icon,
  Message,
  Dropdown,
  Component
} from "semantic-ui-react";
import DropdownCountry from "../Registration/DropdownCountry";
import { Link } from "react-router-dom";
// import BookerInfoList from "./BookerInfoList";
// import EventTicketList from "./EventTicketList";
// import PaymentBtn from "./PaymentBtn";
// import PaymentBtnBottom from "./PaymentBtnBottom";

export default class Checkout extends React.Component {
  render() {
    return (
      <div>
        {/*<PaymentBtn />*/}
        <h1
          id="bookerInfoPadding"
          className="ui sixteen wide column dividing header centered"
        >
          Payment Options
        </h1>
        <div className="ui internally celled grid" id="bookerContainerInfo">
          <div className="row">
            <div className="eight wide centered column">
              <div className="row">
                <h1 className="ui eight wide column dividing header centered">
                  Login or Register as User
                </h1>
              </div>
              <div className="row">
                <div className="ui sixteen wide column centered">
                  <div>
                    <Link to="/user/login">
                      <button
                        className="ui large fluid green button"
                        type="submit"
                      >
                        Login as User
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="ui two wide column centered" />
                <div className="ui sixteen wide column centered">
                  <img
                    id="imgPaymentOpt"
                    src="http://res.cloudinary.com/db8xttzan/image/upload/v1513019646/profile-icon_q3pcew.png"
                  />
                </div>
              </div>
              <div className="row">
                <div className="ui sixteen wide column centered">
                  <div>
                    <Link to="/user/reg">
                      <button
                        className="ui large fluid orange button"
                        type="submit"
                      >
                        Register
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="eight wide centered column">
              <div className="row">
                <h1 className="ui eight wide column dividing header centered">
                  No Registration
                </h1>
              </div>
              <div className="row">
                <div className="ui sixteen wide column centered">
                  <div>
                    <Link to="/fastpay">
                      <button
                        className="ui large fluid yellow button"
                        type="submit"
                      >
                        Fast Pay
                        <Icon name="right chevron" />
                        <Icon name="right chevron" />
                        <Icon name="right chevron" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="ui sixteen wide column centered">
                  <img
                    id="imgPaymentOpt"
                    src="http://res.cloudinary.com/db8xttzan/image/upload/v1513686518/fast_jcop4b.jpg"
                  />
                </div>
              </div>
              <div className="row">
                <div className="ui sixteen wide column centered">
                  <div>
                    <Link to="/fastpay">
                      <button
                        className="ui large fluid yellow button"
                        type="submit"
                      >
                        Fast Pay
                        <Icon name="right chevron" />
                        <Icon name="right chevron" />
                        <Icon name="right chevron" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1
          id="checkoutText"
          className="ui sixteen wide column dividing header centered"
        >
          ###
        </h1>

        {/*<EventTicketList ticketInfo={this.props.ticketInfo} />*/}

        <h1
          id="checkoutText"
          className="ui sixteen wide column dividing header centered"
        >
          ###
        </h1>
        {/*<PaymentBtnBottom />*/}
      </div>
    );
  }
}

// export default class CreateNewEventBtn extends React.Component {
//   render() {
//     return (
//       <div className="ui grid" id="headerCreateNewEvent">
//         <div className="four wide center aligned column">
//           <div />
//         </div>
//         <div className="eight wide center aligned column">
//           <div>
//             <Link to="/admin/create/event">
//               <button
//                 className="ui large fluid orange button"
//                 type="submit"
//               >
//                 Create New Event
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div
//           className="four wide center aligned column"
//           id="dropTrigCreateEvent"
//         >
//           <DropdownTrigger />
//         </div>
//       </div>
//     );
//   }
// }

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
