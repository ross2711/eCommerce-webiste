import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router-dom";
import history from "./History";
import FilterableEventList from "./FilterableEventList/index";
import UserReg from "./Registration/UserReg/User";
import AdminReg from "./Registration/AdminReg/Admin";
import AdminTerm from "./Registration/AdminTerms/index";
import UserLogin from "./Login/UserLogin/index";
import AdminLogin from "./Login/AdminLogin/index";
import AdminPage from "./AdminArea/index";
import AdminCreateEventPage from "./AdminArea/AdminCreateEventPage/index";
import EditAdminEventPage from "./AdminArea/AdminEditEventPage/index";
import ShippingForm from "./Shipping/index";
import Cart from "./Cart/index";
import CheckoutOption from "./CheckoutOption/index";
import FastPayCheckout from "./Checkout/index";
import UserCheckout from "./UserCheckout/index";
import AdminOrders from "./AdminOrders/index";
import FinalConfirmation from "./FinalConfirmation/index";
import Modal from "./AdminArea/EditEventTitleModal";
import Perf from "react-addons-perf";

// window.perf = Perf;

export const routes = () => (
	<Router history={history}>
		<div>
			<Route exact path="/" component={FilterableEventList} />
			<Route path="/user/reg" component={UserReg} />
			<Route path="/admin/terms" component={AdminTerm} />
			<Route path="/admin/reg" component={AdminReg} />
			<Route path="/user/login" component={UserLogin} />
			<Route path="/admin/login" component={AdminLogin} />
			<Route path="/admin/area" component={AdminPage} />
			<Route
				path="/admin/create/event"
				component={AdminCreateEventPage}
			/>
			<Route path="/admin/edit/event" component={EditAdminEventPage} />
			<Route path="/shipping" component={ShippingForm} />
			<Route path="/cart" component={Cart} />
			<Route path="/checkout/option" component={CheckoutOption} />
			<Route path="/fastpay" component={FastPayCheckout} />
			<Route path="/user/checkout" component={UserCheckout} />
			<Route path="/admin/orders" component={AdminOrders} />
			<Route path="/confirmation" component={FinalConfirmation} />
			<Route path="/EditEventTitleModal" component={Modal} />
		</div>
	</Router>
);
