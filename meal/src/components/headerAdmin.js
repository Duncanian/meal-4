import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import MealMan from './mealMan';
import AddMeal from './addMeal';
import DailyOrders from './dailyOrders';
import OrderAdmin from './orderAdmin';
import Footer from './footer';

class HeaderAdmin extends Component {
  render() {
    return (
    	<Router>
	      <div>

	      	<header>
				<nav>
					<h1>Book-A-Meal</h1>
					<label htmlFor="toggle">&#9776;</label>
					
					<ul>
						<NavLink to="/admin" activeClassName="active"><li>Manage</li></NavLink>
						<NavLink to="/admin/add-meal" activeClassName="active"><li>Add Meal</li></NavLink>
						<NavLink to="/admin/todays-orders" activeClassName="active"><li>Orders</li></NavLink>
						<NavLink to="/admin/order-history" activeClassName="active"><li>Order History</li></NavLink>
						<li className="welcome">Admin</li>
						<NavLink to="#"><li>Log out</li></NavLink>
					</ul>

				</nav>
			</header>

			<Route exact path="/admin" component={MealMan}></Route>
	        <Route path="/admin/add-meal" component={AddMeal}></Route>
	        <Route path="/admin/todays-orders" component={DailyOrders}></Route>
	        <Route path="/admin/order-history" component={OrderAdmin}></Route>
	        
	      </div>
      	</Router>
    );
  }
}

export default HeaderAdmin;
