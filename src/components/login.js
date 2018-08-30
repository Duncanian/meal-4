import React, { Component } from 'react';
import './css/form.css';
import { postData } from './crud';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';
import Home from './home';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token:'',
      username:'',
      password:'',
      message:'',
      token:'',
      error:false,
      login:false
    }

  }

  handleChange = (event) => {

    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value
    });

  }

  handleSubmit = (e) => {
    e.preventDefault();

    let url = "https://book-meal-api.herokuapp.com/api/v2/auth/login";
    let details = {
        username:this.state.username,
        password:this.state.password
      }

    postData(url, details)
    .then(data => {
      console.log(data);
        if (data.message) {
          this.setState({
            message:data.message,
            error:true
          });
        }else if (data.token){
          this.setState({
            token:data.token,
            error:false,
            login:true
          });
          if(this.state.token != ''){
            localStorage.setItem('access_token', this.state.token);
          }else{
            // console.log('Could not generate token');
          }

        }
    })
    .catch(error => console.error(error))
  }

  render() {
    let errMessage = '';
    let sucMes = '';

    if (this.state.error) {
      errMessage = (
        <div className="alert alert-warning" role="alert">
          {this.state.message}
        </div>
       )
    } else if (this.state.login) {
      sucMes = (
        <div className="alert alert-success" role="alert">
          {/*this.state.token*/}
          Redirecting....
        </div>
        )
    }
    return (
      <div>
        <div className="container-fluid auth_body">
          <div className="row">

            <section className="col-md-4 col-md-offset-4">
              <div>
                <div className="auth_header">
                  <h1>Login</h1>
                  { errMessage }
                  { sucMes }

                </div>
                <div className="auth_form">

                  <form onSubmit={this.handleSubmit} method="post">
                    <div className="form_input">
                      <p>Username : </p>
                      <input type="text" name="username" placeholder="Enter Your Username" value={this.state.username} onChange={this.handleChange}/>
                    </div>

                    <div className="form_input">
                      <p>Password : </p>
                      <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange}/>
                    </div>

                    <div className="form_input">
                      <input type="submit" name="Login" value="Login" />
                      <p>You don't have an account? <Link to="/sign-up">Sign up</Link></p>
                    </div>
                  </form>

                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    );
  }
}

export default Login;
