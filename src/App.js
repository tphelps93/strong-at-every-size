import './App.css';
import React, { Component } from 'react';
import UsersContext from './DataContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  fetchUsers,
  fetchItems,
  fetchPrograms,
  fetchReviews,
  fetchPromos,
  fetchPurchases,
  fetchArticles,
  fetchTestimonies,
} from '../src/services/api-service';

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
  state = {
    users: [],
    items: [],
    programs: [],
    purchases: [],
    reviews: [],
    promos: [],
    articles: [],
    testimonies: [],
    error: null,
  };

  addUser = newUser => {
    this.setState({
      users: [...this.state.users, newUser],
    });
  };

  addReview = newReview => {
    this.setState([...this.state.reviews, newReview]);
  };

  setError = error => {
    console.log(error)
    this.setState({ error })
  }

  componentDidMount() {
    Promise.all([
      fetchUsers(),
      fetchItems(),
      fetchPrograms(),
      fetchReviews(),
      fetchPromos(),
      fetchPurchases(),
      fetchArticles(),
      fetchTestimonies(),
    ])
      .then(values =>
        this.setState({
          users: values[0],
          items: values[1],
          programs: values[2],
          reviews: values[3],
          promos: values[4],
          purchases: values[5],
          articles: values[6],
          testimonies: values[7],
        })
      )
      .catch(error => {
        this.setState({
          error,
        });
      });
  }

  render() {
    const contextValue = {
      users: this.state.users,
      items: this.state.items,
      programs: this.state.programs,
      purchases: this.state.purchases,
      reviews: this.state.reviews,
      promos: this.state.promos,
      articles: this.state.articles,
      testimonies: this.state.testimonies,
      addUser: this.addUser,
      addReview: this.addReview,
      setError: this.setError,
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
            <Route path='/store/:item_id' component={StoreDetails} />

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
