import React from 'react'
import {Accounts}       from 'meteor/accounts-base'

export default class Logout extends React.Component{
	handleClick(){
		Meteor.logout()
	}

	render(){
		return <button onClick={this.handleClick.bind(this)}>
			Logout
		</button>
	}
}