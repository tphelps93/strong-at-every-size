import React, { Component } from 'react';
import Nav from './Nav';
import smLogo from '../../Images/smLogo.png';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  handleLogoutClick = () => {};

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
        <Link onClick={this.handleLogoutClick} to='/'>
          Logout
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
        <Nav />
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </div>
    );
  }
}
