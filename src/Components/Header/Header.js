import React, { Component } from 'react';
import Nav from './Nav';
import smLogo from '../../Images/smLogo.png';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';
import DataContext from '../../DataContext';

// CSS Imports 
import './Header.css';

export default class Header extends Component {
  static contextType = DataContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.clearAuthToken();
  };

  renderLoginLink() {
    return (
      <div className='login-signup'>
        <Link to='/login'>
          <button> Login </button>
        </Link>
        <Link to='/signup'>
          <button> Sign Up </button>
        </Link>
      </div>
    );
  }

  renderLogoutLink() {
    return (
      <div className='logout'>
        <Link to='/profile-page'>
          <button> Profile </button>
        </Link>
        <Link onClick={this.handleLogoutClick} to='/'>
          <button> Logout </button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className='header'>
        <Link to='/'>
          <img
            className='logo'
            alt='strong at every size logo'
            src={smLogo}
          ></img>
        </Link>
        <div className='navigation-links'>
          <Nav />
        </div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </div>
    );
  }
}
