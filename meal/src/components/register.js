import React, { Component } from 'react';
import './css/form.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Register extends Component {

  constructor() {
    super();

    this.state = {
      username:'',
      email:'',
      password:'',
      password_c:'',
      message:'',
      error:false,
      success:false
    }

  }

  handleChange = (event) => {

    let target = event.target;

    let value = target.value;

    let name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state)

  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.password != this.state.password_c) {
      this.setState({
        message: 'Your passwords do not match!',
        error:true
      });
    }else{

      let local = "http://127.0.0.1:5000/api/v2/auth/signup/";
      let details = {
          username:this.state.username,
          email:this.state.email,
          password:this.state.password
        }

      const postData = (url = ``, data = {}) => {
      // Default options are marked with *

        fetch(url,
          {
            method:"POST",
            body: JSON.stringify(data),
          }
        )
        .then(response => response.json())
        .then(data => {
          console.log(data);
            if (data.message == 'You have been successfully registered!'){
              this.setState({
                message:data.message,
                success:true,
                error:false
              });
            }else if (data.message) {
              this.setState({
                message:data.message,
                error:true 
              });
            }
        })
        .catch(error => {
          console.log(`Fetch Error`, error)
        })

      };

      postData(local, details);
    }
  }

  render() {
    let errMessage = '';
    let successMes = '';

    if (this.state.error) {
      errMessage = ( <p>{this.state.message}</p> )
    }
    else if (this.state.success) {
        successMes = ( <h3>{this.state.message}</h3> )
    }

    return (
      <div>
          <div className="container-fluid auth_body">
              <div className="row">

                <section className="col-md-4 col-md-offset-4">
                  <div>

                    <div className="auth_header">
                      <h1>Register</h1>
                      { errMessage }
                      { successMes }
                    </div>

                    <div className="auth_form">

                    <form onSubmit={this.handleSubmit} method="post">
                      <div className="form_input">
                        <p>Username : </p>
                        <input type="text" name="username" value={this.state.username} placeholder="Enter Username" onChange={this.handleChange}/>
                      </div>

                      <div className="form_input">
                        <p>Email : </p>
                        <input type="email" name="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleChange}/>
                      </div>

                      <div className="form_input">
                        <p>Password : </p>
                        <input type="password" name="password" value={this.state.password} placeholder="Enter Password" onChange={this.handleChange}/>
                      </div>

                      <div className="form_input">
                        <p>Password Confirm : </p>
                        <input type="password" name="password_c" value={this.state.password_c} placeholder="Enter Confirm Password" onChange={this.handleChange}/>
                      </div>

                      <div className="form_input">
                        <input type="submit" name=" Register" value="Register" />
                        <p>You already have an account? <Link to="/sign-in">Sign in</Link></p>
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

export default Register;
