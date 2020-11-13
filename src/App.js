import './App.css';
import React, { Component } from 'react';
import UsersContext from './UsersContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fetchUserProfile } from './api-service';

import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Testimonies from './Components/Testimonies/Testimonies';
import Store from './Components/Store/Store';
import StoreDetails from './Components/StoreDetails/StoreDetails';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';

import AdminProf from './Components/AdminProf/AdminProf';
import UserProf from './Components/UserProf/UserProf';

class App extends Component {
  static contextType = UsersContext;
  state = {
    users: this.context.users,
    items: this.context.items,
    user_purchases: this.context.user_purchases,
    user_reviews: this.context.user_reviews,
  };

  componentDidMount() {
    fetchUserProfile(1);
  }
  

  render() {
    const contextValue = {
      users: this.state.users,
      items: this.state.items,
      user_purchases: this.state.user_purchases,
      user_reviews: this.state.user_reviews,
    };

    return (
      <Router>
        <div className='App'>
          <UsersContext.Provider value={contextValue}>
            <Header />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/testimonies' component={Testimonies} />
            <Route path='/contact' component={Contact} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route exact path='/store' component={Store} />
            <Route path='/store/:id' component={StoreDetails} />

            <Route path='/user-profile' component={UserProf} />
            <Route path='/admin-profile' component={AdminProf} />
            <Footer />
          </UsersContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
