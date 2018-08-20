import React, { Component } from 'react';
import './css/home.css';
import HeaderUser from './headerUser';
import Footer from './footer';
import image from './Images/ba1.jpg'

class Loggedin extends Component {
  render() {
    return (
      <div>
            <HeaderUser />

	        <div>
	          <div className="row">
	            <section>
	              <div className="landing col-md-12">
	                <div className="col-md-8 col-md-offset-2">
	                  <h1>Welcome to Book-a-meal</h1>
	                </div>
	                <img src={image} alt="Home"/>
	              </div>
	            </section>
	          </div>
	        </div>

	        <div className="container">
	          <div className="row">
	            <section className="container-fluid">
	              <div className="about">
	                <h1>About Book-A-Meal</h1>
	                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	              </div>
	            </section>
	          </div>
	        </div>

	        <Footer />
      </div>
    );
  }
}

export default Loggedin;
