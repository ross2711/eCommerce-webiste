import React from "react";
import {
  Button,
  Form,
  Icon,
  Message,
  Dropdown,
  Component
} from "semantic-ui-react";
import { Accounts } from "meteor/accounts-base";
import DropdownCountry from "../DropdownCountry";

import { Redirect } from "react-router-dom";

export default class UserReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signed_up: false,
      signup_error: null,
      country: "",
      title: ""
    };
    this.getData = this.getData.bind(this);
  }

  getData(country) {
    this.setState({ country });
  }

  register = e => {
    e.preventDefault();
    this.getData();
    debugger;

    var firstName = this.refs.firstName.value.trim();
    var lastName = this.refs.lastName.value.trim();
    var email = this.refs.email.value.trim();
    var password = this.refs.password.value.trim();
    var country = this.state.country;
    var title = this.state.title;

    // var companyName = this.refs.companyName.value.trim();
    // var businessType = this.refs.businessType.value.trim();
    // var businessAddressNumber = this.refs.businessAddressNumber.value.trim();
    // var businessAddressStreet = this.refs.businessAddressStreet.value.trim();
    // var city = this.refs.city.value.trim();
    // var additionalDetails = this.refs.additionalDetails.value.trim();

    var profile = {
      admin: false,
      firstName,
      lastName,
      email,
      password,
      country,
      title
    };

    console.log(email, password, profile);

    Meteor.call("createUserInServer", email, password, profile, err => {
      debugger;
      if (err) {
        console.log(err);
        this.setState({ signup_error: err });
        debugger;
      } else {
        console.log("logging in");
        Meteor.loginWithPassword(email, password, () => {
          console.log("done");
          this.setState({ signed_up: true });
        });
      }
    });
  };

  render() {
    if (this.state.signed_up) {
      return <Redirect to="/" />;
    }
    return (
      <div className="ui container" id="regForm">
        <Message
          id="userRegFormTitle"
          attached
          header="Welcome to Ticead Alba User Registration"
          content="Fill out the form below and Register for a new User Account"
        />

        <form
          onSubmit={this.register}
          className="ui large form"
          id="personalInfo"
        >
          <h3 id="formText" className="ui inverted dividing header">
            Personal Info
          </h3>
          <div className="three fields">
            <div className="field">
              <label id="formText">Title</label>
              <Dropdown
                selection
                fluid
                options={[
                  {
                    text: "Mr",
                    value: "Mr"
                  },
                  {
                    text: "Mrs",
                    value: "Mrs"
                  },
                  {
                    text: "Miss",
                    value: "Miss"
                  }
                ]}
                onChange={(e, { value }) => {
                  this.setState({ title: value });
                }}
              />
            </div>
            <div className="field">
              <label id="formText">First Name</label>
              <input
                ref="firstName"
                type="text"
                name="shipping[first-name]"
                placeholder="First Name"
              />
            </div>
            <div className="field">
              <label id="formText">Last Name</label>
              <input
                ref="lastName"
                type="text"
                name="shipping[last-name]"
                placeholder="Last Name"
              />
            </div>
          </div>

          <h3 id="formText" className="ui inverted dividing header">
            Account Info
          </h3>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <label id="formText">E-mail</label>
                <input
                  ref="email"
                  type="text"
                  name="E-mail"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="field">
                <label id="formText">Password</label>
                <input
                  ref="password"
                  type="text"
                  name="Password"
                  placeholder="Create Password"
                />
              </div>
            </div>
          </div>

          <h3 id="formText" className="ui inverted dividing header">
            Terms
          </h3>
          <div className="field">
            <div className="field">
              <div className="ui inverted checkbox">
                <input type="checkbox" id="terms" />
                <label id="formText" for="terms">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
            <div id="regBtn">
              <button className="ui large orange button" type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// import React from "react";
// import {
//   Button,
//   Form,
//   Icon,
//   Message,
//   Dropdown,
//   Component
// } from "semantic-ui-react";
// import { Accounts } from "meteor/accounts-base";
// import DropdownCountry from "../DropdownCountry";
// import DropdownTitle from "../DropdownTitle";
// import { Redirect } from "react-router-dom";

// export default class UserReg extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       signed_up: false,
//       signup_error: null,
//       country: ""
//     };
//     this.getData = this.getData.bind(this);
//   }

//   getData(country) {
//     this.setState({ country });
//   }

//   register = e => {
//     e.preventDefault();
//     this.getData();
//     debugger;

//     var firstName = this.refs.firstName.value.trim();
//     var lastName = this.refs.lastName.value.trim();
//     var email = this.refs.email.value.trim();
//     var password = this.refs.password.value.trim();
//     var country = this.state.country;

//     // var companyName = this.refs.companyName.value.trim();
//     // var businessType = this.refs.businessType.value.trim();
//     // var businessAddressNumber = this.refs.businessAddressNumber.value.trim();
//     // var businessAddressStreet = this.refs.businessAddressStreet.value.trim();
//     // var city = this.refs.city.value.trim();
//     // var additionalDetails = this.refs.additionalDetails.value.trim();

//     var profile = {
//       admin: false,
//       firstName,
//       lastName,
//       email,
//       password,
//       country
//     };

//     console.log(email, password, profile);

//     Meteor.call("createUserInServer", email, password, profile, err => {
//       debugger;
//       if (err) {
//         console.log(err);
//         this.setState({ signup_error: err });
//         debugger;
//       } else {
//         console.log("logging in");
//         Meteor.loginWithPassword(email, password, () => {
//           console.log("done");
//           this.setState({ signed_up: true });
//         });
//       }
//     });
//   };

//   render() {
//     if (this.state.signed_up) {
//       return <Redirect to="/" />;
//     }
//     return (
//       <div className="ui container" id="regForm">
//         <Message
//           id="userRegFormTitle"
//           attached
//           header="Welcome to Ticead Alba User Registration"
//           content="Fill out the form below and Register for a new User Account"
//         />

//         <form
//           onSubmit={this.register}
//           className="ui large form"
//           id="personalInfo"
//         >
//           <h3 id="formText" className="ui inverted dividing header">
//             Personal Info
//           </h3>
//           <div className="three fields">
//             <div className="field">
//               <label id="formText">Title</label>
//               <DropdownTitle />
//             </div>
//             <div className="field">
//               <label id="formText">First Name</label>
//               <input
//                 ref="firstName"
//                 type="text"
//                 name="shipping[first-name]"
//                 placeholder="First Name"
//               />
//             </div>
//             <div className="field">
//               <label id="formText">Last Name</label>
//               <input
//                 ref="lastName"
//                 type="text"
//                 name="shipping[last-name]"
//                 placeholder="Last Name"
//               />
//             </div>
//           </div>

//           <h3 id="formText" className="ui inverted dividing header">
//             Account Info
//           </h3>
//           <div className="field">
//             <div className="two fields">
//               <div className="field">
//                 <label id="formText">E-mail</label>
//                 <input
//                   ref="email"
//                   type="text"
//                   name="E-mail"
//                   placeholder="example@gmail.com"
//                 />
//               </div>
//               <div className="field">
//                 <label id="formText">Password</label>
//                 <input
//                   ref="password"
//                   type="text"
//                   name="Password"
//                   placeholder="Create Password"
//                 />
//               </div>
//             </div>
//           </div>

//           <h3 id="formText" className="ui inverted dividing header">
//             Terms
//           </h3>
//           <div className="field">
//             <div className="field">
//               <div className="ui inverted checkbox">
//                 <input type="checkbox" id="terms" />
//                 <label id="formText" for="terms">
//                   I agree to the terms and conditions
//                 </label>
//               </div>
//             </div>
//             <div id="regBtn">
//               <button className="ui large orange button" type="submit">
//                 Register
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// import React from "react";
// import {
//   Button,
//   Form,
//   Icon,
//   Message,
//   Dropdown,
//   Component
// } from "semantic-ui-react";
// import DropdownTitle from "../DropdownTitle";

// const UserReg = () => (

// );

// export default UserReg;

{
  /*
        <div class="inline field">
            <div class="ui checkbox">

                
            </div>
        </div>
*/
}
{
  /*<div class="ui checkbox">
  <input type="checkbox">
  <label>Label</label>
</div>

<div class="ui checkbox">
  <label for="foo"></label>
  <input id="foo" type="checkbox">
</div>*/
}

// import React from 'react'
// import { Button, Form, Icon, Message } from 'semantic-ui-react'

// const UserReg = () => (
//   <div className="ui container">
//     <Message
//       attached
//       header='Welcome to Ticead Alba User Registration'
//       content='Fill out the form below to sign-up for a new User Account'
//     />

//     <Form className='attached fluid segment'>

//         <Form.Group >
//           <Form.Select required label='Title' options={options} placeholder='Title' />
//           <Form.Input required label='First Name' placeholder='First Name' type='text' />
//           <Form.Input required label='Last Name' placeholder='Last Name' type='text' />
//         </Form.Group>

//         <Form.Input  required label='E-mail' placeholder='example@gmail.com' />
//         <Form.TextArea label='Additional info' placeholder='Please note any additional details here...' />

//         <Form.Checkbox required inline label='I agree to the terms and conditions' />

//         <Button color='blue'>Submit</Button>

//       </Form>
//     <Message attached='bottom' warning>
//       <Icon name='help' />
//       Already signed up?&nbsp;<a href='#'>User Login here</a>&nbsp;instead.
//     </Message>
//   </div>
// )

// export default UserReg

//=============================================================================================================//

{
  /*       <h3 className="ui dividing header">Receipt</h3>
       <div className="field">
        <label>Send Receipt To:</label>
        <div className="ui fluid multiple search selection dropdown">
          <input type="hidden" name="receipt">
          <i className="dropdown icon"></i>
          <div className="default text">Saved Contacts</div>
          <div class="menu">
            <div class="item" data-value="jenny" data-text="Jenny">
              <img class="ui mini avatar image" src="/images/avatar/small/jenny.jpg">
              Jenny Hess
            </div>
            <div class="item" data-value="elliot" data-text="Elliot">
              <img class="ui mini avatar image" src="/images/avatar/small/elliot.jpg">
              Elliot Fu
            </div>
            <div class="item" data-value="stevie" data-text="Stevie">
              <img class="ui mini avatar image" src="/images/avatar/small/stevie.jpg">
              Stevie Feliciano
            </div>
            <div class="item" data-value="christian" data-text="Christian">
              <img class="ui mini avatar image" src="/images/avatar/small/christian.jpg">
              Christian
            </div>
            <div class="item" data-value="matt" data-text="Matt">
              <img class="ui mini avatar image" src="/images/avatar/small/matt.jpg">
              Matt
            </div>
            <div class="item" data-value="justen" data-text="Justen">
              <img class="ui mini avatar image" src="/images/avatar/small/justen.jpg">
              Justen Kitsune
            </div>
          </div>
        </div>
      </div>*/
}
{
  /*       <div className="ui segment">
        <div className="field">
          <div className="ui toggle checkbox">
            <input type="checkbox" name="gift" tabIndex="0" className="hidden"/>
            <label id="formText" >Do not include a receipt in the package</label>
          </div>
        </div>
      </div>
      <div className="ui button" tabIndex="0">Register</div>*/
}

{
  /*<Form className='attached fluid segment'>

        <Form.Group >
          <Form.Select required label='Title' options={options} placeholder='Title' />
          <Form.Input required label='First Name' placeholder='First Name' type='text' />
          <Form.Input required label='Last Name' placeholder='Last Name' type='text' />
        </Form.Group>
          <Form.Input required label='Company E-mail' placeholder='example@company.com' />
          <Form.Input required label='Position in company' placeholder='Postion in company' />

        <div className="ui inverted divider"></div>

          <Form.Input required label='Company name' placeholder='Company name' />
          <Form.Input required label='Company address line 1' placeholder='Company address line 1' />
          <Form.Input required label='Company address line 2' placeholder='Company address line 2' />
  
        <Form.Group >
          <Form.Input required label='City' placeholder='City' type='text' />
          <Form.Input required label='Postal code' placeholder='Postal code' type='text' />
        </Form.Group>

        <Form.TextArea label='Additional info' placeholder='Please note any additional details here...' />
        
        <Form.Checkbox required inline label='I agree to the terms and conditions' />
        
        <Button color='blue'>Submit</Button>

      </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Already signed up?&nbsp;<a href='#'>Admin Login here</a>&nbsp;instead.
    </Message>*/
}

// <Form>
//   <Form.Field required>
//     <label>Last name</label>
//     <Input placeholder='Full name' />
//   </Form.Field>
// </Form>

// <div class="ui form">
//     <div class="required field">
//       <label>Last name</label>
//       <input type="text" placeholder="Full Name">
//     </div>
//     <div class="required inline field">
//       <div class="ui checkbox">
//         <input type="checkbox" tabIndex="0" class="hidden">
//         <label>I agree to the terms and conditions</label>
//       </div>
//     </div>
// </div>

// <Input fluid icon='search' placeholder='Search...' />

// import React        from 'react'

// export default class UserRegistration extends React.Component{
//  render() {
//      return
//        (
//        <form class="ui form">
//          <div class="two fields">
//              <div class="required field">
//                <label>First name</label>
//                <input type="text" name="first-name" placeholder="First Name" />
//              </div>
//              <div class="required field">
//                <label>Last name</label>
//                <input type="text" name="last-name" placeholder="Last Name" />
//              </div>
//            </div>

//          <div class="ui form">
//            <div class="field">
//              <label>E-mail</label>
//              <input type="email" placeholder="example@gmail.com" />
//            </div>
//          </div>

//          <div class="required field">
//            <div class="ui checkbox">
//              <input type="checkbox" tabindex="0" class="hidden" />
//              <label>I agree to the Terms and Conditions</label>
//            </div>
//          </div>
//          <button class="ui button" type="submit">Submit</button>
//        </form>
//        )
//      }
//    }

{
  /*
<div class="ui form">
  <div class="two fields">
    <div class="required field">
      <label>First name</label>
      <input type="text" name="first-name" placeholder="First Name">
    </div>
    <div class="required field">
      <label>Last name</label>
      <input type="text" name="last-name" placeholder="Last Name">
    </div>
  </div>
</div>
*/
}
