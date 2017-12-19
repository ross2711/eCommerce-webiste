// import React 			from 'react'
// import {Accounts}       from 'meteor/accounts-base'

// export default class Register extends React.Component{

// 		handleRegister(e){
// 			e.preventDefault()
// 		  	var email = this.refs.email.value.trim()
// 		  	var password = this.refs.password.value.trim()
// 		  	var profile = {
// 			    username:'mario',
// 			    admin:true
// 			    Meteor.call('createUserInServer',email,password,profile)
// 			}
// 		}

// 		Meteor.call('createUserInServer',email, password,(err,ok)=>{
// 			console.log(err, ok)
// 		})
// 	}

// 	render(){
// 		return (
// 			<form onSubmit={this.register.bind(this)}>
// 				<input ref = 'email' />
// 				<input ref = 'password' />
// 				<button>register</button>
// 			</form>
// 		)
// 	}
// }
