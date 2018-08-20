import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Register from './register';
import Login from './login';
import Home from './home';


class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <h1>Book-A-Meal</h1>
              <label htmlFor="toggle">&#9776;</label>
              
              <ul>
                <NavLink to="/" activeClassName="active"><li>Home</li></NavLink>
                <NavLink to="/sign-up" activeClassName="active"><li>Sign up</li></NavLink>
                <NavLink to="/sign-in" activeClassName="active"><li>Sign in</li></NavLink>
              </ul>
            </nav>
          </header>
        

        <Route exact path="/" component={Home}></Route>
        <Route path="/sign-up" component={Register}></Route>
        <Route path="/sign-in" component={Login}></Route>

        </div>
      </Router>
    );
  }
}

export default Header;
