import React from "react";

export default props => {
	return (
		<div className="four wide field">
			<input
				onChange={e => props.passAddress(e.target.value)}
				type="text"
				name="address"
				placeholder={props.address}
			/>
		</div>
	);
};

// import React from "react";
// import DropdownCountry from "../../../Registration/DropdownCountry";

// export default class EditAddress extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			number: props.number,
// 			address: props.address,
// 			city: props.city
// 		};

// 		// this.getData = this.getData.bind(this);
// 	}

// 	getData(e) {
// 		var number = this.refs.number.value.trim();
// 		var address = this.refs.address.value.trim();
// 		var city = this.refs.city.value.trim();
// 		debugger;
// 		this.props.passAddressData(number, address, city);
// 	}

// 	render() {
// 		return (
// 			<div className="fields">
// 				<div className="four wide field">
// 					<input
// 						onChange={this.getData.bind(this)}
// 						ref="number"
// 						type="Number"
// 						name="shipping[address]"
// 						placeholder={this.state.number}
// 					/>
// 				</div>
// 				<div className="twelve wide field">
// 					<input
// 						onChange={this.getData.bind(this)}
// 						ref="address"
// 						type="text"
// 						name="shipping[address-2]"
// 						placeholder={this.state.address}
// 					/>
// 				</div>

// 				<div className="two fields">
// 					<div className="field">
// 						<label id="formText">City</label>
// 						<input
// 							onChange={this.getData.bind(this)}
// 							ref="city"
// 							type="text"
// 							name="city"
// 							placeholder={this.state.city}
// 						/>
// 					</div>

// 					<div className="field">
// 						<label ref="country" id="formText">
// 							Country
// 						</label>
// 						{/*<DropdownCountry />*/}
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
