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
  fetchIsAdminCheck,
  fetchUploads,
} from '../src/services/api-service';
// CSS Imports
import '../src/Components/FontAwesomeIcons/store';

import Home from './Components/Home/HomePage/Home';
import Promos from './Components/Promotions/Promos';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Testimonies from './Components/Testimonies/Testimonies';
import Store from './Components/Store/Store';
import StoreDetails from './Components/StoreDetails/StoreDetails';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';

import ProfilePage from './Components/ProfilePage/ProfilePage';
import EditProfileForm from './Components/ProfilePage/EditProfileForm/EditProfileForm';

import PromoForm from './Components/Home/PromoForm/PromoForm';
import ArticleForm from './Components/Home/ArticleForm/ArticleForm';
import TestimonyForm from './Components/Testimonies/TestimonyForm/TestimonyForm';
import ItemForm from './Components/Store/ItemForm/ItemForm';
import TokenService from './services/token-service';

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
    photos: [],
    authToken: null,
    isadmin: false,
    error: null,
  };

  addUser = newUser => {
    this.setState({
      users: [...this.state.users, newUser],
    });
  };

  addReview = newReview => {
    this.setState({
      reviews: [...this.state.reviews, newReview],
    });
  };

  addPromo = newPromo => {
    this.setState({
      promos: [...this.state.promos, newPromo],
    });
  };

  addArticle = newArticle => {
    this.setState({
      articles: [...this.state.articles, newArticle],
    });
  };

  addTestimony = newTestimony => {
    this.setState({
      testimonies: [...this.state.testimonies, newTestimony],
    });
  };

  addItem = newItem => {
    this.setState({
      items: [...this.state.items, newItem],
    });
  };

  deleteItem = item_id => {
    this.setState({
      items: this.state.items.filter(item => item.item_id !== item_id),
    });
  };

  deleteTestimony = testimony_id => {
    this.setState({
      testimonies: this.state.testimonies.filter(
        testimony => testimony.testimony_id !== testimony_id
      ),
    });
  };

  deleteArticle = article_id => {
    this.setState({
      articles: this.state.articles.filter(
        article => article.article_id !== article_id
      ),
    });
  };

  deletePromo = promo_id => {
    this.setState({
      promos: this.state.promos.filter(promo => promo.promo_id !== promo_id),
    });
  };

  editProfile = updatedUser => {
    let userId = this.state.users.findIndex(
      user => user.user_id === updatedUser.user_id
    );
    this.setState({
      users: this.state.users.splice(userId, 1, updatedUser),
    });
  };

  setAuthToken = authToken => {
    this.setState({
      authToken: authToken,
    });
  };

  clearAuthToken = () => {
    this.setState({
      authToken: null,
    });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  setAdmin = () => {
    this.setState({
      isadmin: true,
    });
  };

  setUser = () => {
    this.setState({
      isadmin: false,
    })
  }

  componentDidMount() {
    let promises = [
      fetchUsers(),
      fetchItems(),
      fetchPrograms(),
      fetchReviews(),
      fetchPromos(),
      fetchPurchases(),
      fetchArticles(),
      fetchTestimonies(),
      fetchUploads(),
    ];

    let loggedIn = TokenService.hasAuthToken();
    if (loggedIn) promises.push(fetchIsAdminCheck());
    Promise.all(promises)
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
          isadmin: loggedIn ? values[8] : false,
          photos: values[8],
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
      photos: this.state.photos,
      authToken: this.state.authToken,
      isadmin: this.state.isadmin,
      addUser: this.addUser,
      addReview: this.addReview,
      addPromo: this.addPromo,
      addArticle: this.addArticle,
      addTestimony: this.addTestimony,
      addItem: this.addItem,
      deleteItem: this.deleteItem,
      deleteTestimony: this.deleteTestimony,
      deleteArticle: this.deleteArticle,
      deletePromo: this.deletePromo,
      editProfile: this.editProfile,
      setError: this.setError,
      setAdmin: this.setAdmin,
      setUser: this.setUser,
      setAuthToken: this.setAuthToken,
      clearAuthToken: this.clearAuthToken,
    };

    return (
      <Router>
        <div className='App'>
          <UsersContext.Provider value={contextValue}>
            <Header />
            <Route exact path='/' component={Home} />
            <Route path='/promos' component={Promos} />
            <Route path='/news' component={News} />
            <Route path='/about' component={About} />
            <Route path='/testimonies' component={Testimonies} />
            <Route path='/contact' component={Contact} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route exact path='/store' component={Store} />
            {/* <Route path='/store/:item_id' component={StoreDetails} /> */}

            {/* <Route path='/profile-page' component={ProfilePage} />
            <Route path='/edit-profile' component={EditProfileForm} /> */}

            <Route path='/add-promo' component={PromoForm} />
            <Route path='/add-article' component={ArticleForm} />
            <Route path='/add-testimony' component={TestimonyForm} />
            {/* <Route path='/add-item' component={ItemForm} /> */}
            <Footer />
          </UsersContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
