import React, { Component } from 'react';
import './css/form.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';
import Home from './home';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
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

    let local = "http://127.0.0.1:5000/api/v2/auth/login/";
    let details = {
        username:this.state.username,
        password:this.state.password
      }

    const postData = (url = ``, data = {}) => {
    // Default options are marked with *

      return fetch(url,
        {
          method:"POST",
          body: JSON.stringify(data),
        }
      )
      .then(response => response.json())
      .catch(error => {
        console.log(`Fetch Error`, error)
      })

    };

    postData(local, details)
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


    // const access_token = localStorage.getItem('access_token');

    // console.log(access_token)
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   // axios({
  //   //   method: 'post',
  //   //   url: `${local}`,
  //   //   data: {username:"admin", password:"admin"}
  //   // })
  //   console.log('The form was submitted');
  //   // console.log(event)
  //   // console.log(this.state);

  //   let myapi = 'https://book-meal-api.herokuapp.com/api/v2/auth/login';
  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //   let local = "http://127.0.0.1:5000/";

  //   const postData = (url = ``, data = {}) => {
  //   // Default options are marked with *

  //     fetch(proxyurl + url,
  //     {
  //       method:"POST",
  //       body: JSON.stringify(data),
  //       headers: {
  //           "Content-Type": "application/json",
  //           "Accept":"application/json"
  //           // "Content-Type": "application/x-www-form-urlencoded",
  //       }
  //     }
  //     )
  //     .then(response => response.json())
  //     .then(data => {
  //         /*this.setState({
  //           isLoaded: true,
  //           items: data
  //         });*/
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.log(`Fetch Error`, error)
  //     })

  //   };

      /*return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, same-origin, *omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()) // parses response to JSON
      .catch(error => console.error(`Fetch Error =\n`, error))*/

    // return postData(myapi, {username:"admin", password:"admin"});
      // .then(data => console.log(data)) // JSON from `response.json()` call
      // .catch(error => console.error(error));

  // }

  // handleCheck(e) {
  //   e.preventDefault()
  //   console.log('Hello')
  // }

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
