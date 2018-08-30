import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import './css/style.css';
import Home from './home';
import Menu from './menu';
import BookedMeals from './bookedMeals';
import OrderUser from './orderUser';

class HeaderUser extends Component {

	constructor(props) {
		super(props);

		this.state = {
			remove_token : '',
		}

	}

	removeToken = (e) => {
		e.preventDefault();

		const dis = localStorage.getItem('access_token');
		const remove_token = localStorage.removeItem('access_token');

		console.log(dis)
		console.log(remove_token)
	}

	render() {
		return (
			<Router>
				<div>
					<header>
						<nav>
							<h1>Book-A-Meal</h1>
							<label for="toggle">&#9776;</label>

							<ul>
								<NavLink to="/" activeClassName="active"><li class="active">Home</li></NavLink>
								<NavLink to="/my-orders" activeClassName="active"><li>My Orders</li></NavLink>
								<NavLink to="/menu" activeClassName="active"><li>Menu</li></NavLink>
								<NavLink to="/my-order-history" activeClassName="active"><li>Order History</li></NavLink>
								<li class="welcome">Guest</li>
								<NavLink to="/logout"><li onClick={this.removeToken}>Log Out</li></NavLink>
							</ul>
						</nav>
					</header>

					<Route exact path="/" component={Home}></Route>
					<Route path="/my-orders" component={BookedMeals}></Route>
					<Route path="/menu" component={Menu}></Route>
					<Route path="/my-order-history" component={OrderUser}></Route>
				</div>
			</Router>
		);
	}
}

export default HeaderUser;
