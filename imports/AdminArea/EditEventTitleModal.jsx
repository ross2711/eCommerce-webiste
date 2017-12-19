import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AdminEventItem from "./AdminEventItem";

export default class ModalExampleControlled extends Component {
	state = { modalOpen: false };

	handleOpen = () => this.setState({ modalOpen: true });

	handleClose = () => this.setState({ modalOpen: false });

	// getData = e => {
	// 	debugger;
	// 	var data = e.target.value;
	// };

	getData(e) {
		var title = e.target.value;
		this.props.passEventTitle(title);
	}

	render() {
		return (
			<Modal
				trigger={<span onClick={this.handleOpen}>Title: </span>}
				open={this.state.modalOpen}
				onClose={this.handleClose}
				basic
				size="small"
			>
				<Header icon="edit" content="Event Title Edit" />
				<Modal.Content>
					<form class="ui fluid form">
						<div class="field">
							<input
								onChange={this.getData.bind(this)}
								type="text"
								placeholder="edit event title here"
							/>
						</div>
					</form>
					{/*					<input
						onChange={this.getData}
						placeholder="edit event title here"
					/>*/}
					<h3>Please update the Event Title</h3>
				</Modal.Content>
				<Modal.Actions>
					<Link to="/admin/area">
						<Button
							color="green"
							onClick={this.handleClose}
							inverted
						>
							<Icon name="checkmark" /> Update !
						</Button>
					</Link>
				</Modal.Actions>
			</Modal>
		);
	}
}
