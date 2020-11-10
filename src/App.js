import './App.css';
import React, { Component } from 'react';
import UsersContext from './UsersContext';

// import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import Testimonies from './Components/Testimonies/Testimonies';
// import Store from './Components/Store/Store';
// import StoreDetails from './Components/StoreDetails/StoreDetails';
// import SignUp from './Components/SignUp/SignUp';
// import Login from './Components/Login/Login';
import AdminProf from './Components/AdminProf/AdminProf';
// import UserProf from './Components/UserProf/UserProf';

class App extends Component {
  static contextType = UsersContext;
  state = {
    users: this.context.users,
  };

  componentDidMount() {
    this.setState = {
      users: UsersContext.users,
    };
  }

  render() {
    const contextValue = {
      users: this.state.users,
    };

    return (
      <div className='App'>
        <UsersContext.Provider value={contextValue}>
          <Header />
          <AdminProf />
          <Footer />
        </UsersContext.Provider>
      </div>
    );
  }
}

export default App;
