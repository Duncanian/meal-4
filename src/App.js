import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Home from './components/home';
// import Loggedin from './components/loggedin';
// import Register from './components/register';
// import Login from './components/login';

// import HeaderAdmin from './components/headerAdmin';

// import MealMan from './components/mealMan';
// import Menu from './components/menu';
// import AddMeal from './components/addMeal';
// import BookedMeals from './components/bookedMeals';
// import EditMeal from './components/editMeal';

import HeaderUser from './components/headerUser';
import Header from './components/header';
import Footer from './components/footer';


class App extends Component {
  render() {
    const access_token = localStorage.getItem('access_token');

    let authentication;
    if (access_token){
      authentication = (
          <HeaderUser/>
        )
    }else {
      authentication = (
          <Header />
        )
    }

    return (

          <div>
          {/*<Home/>*/}
        {/*<Register/>*/}
      {/*<Login />*/}
      {/*<HeaderAdmin />*/}
      {/*<MealMan />*/}
      {/*<Menu />*/}
        {/*<AddMeal />*/}
        {/*<BookedMeals />*/}
        {/*<EditMeal />*/}
        {/*<HeaderUser />*/}
        {/*<Loggedin />
            <Link to="/">1</Link> or
            <Link to="/sign-in">2</Link>

            <Route exact path="/" component={Home}></Route>

            <Route exact path="/sign-in">

              <h1>Route 2</h1>
            </Route>*/}
            {authentication}
            <Footer />
          </div>

    );
  }
}

export default App;
