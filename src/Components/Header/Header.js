import React, { Component } from 'react';
import Nav from './Nav';
import smLogo from '../../Images/smLogo.png';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';
import DataContext from '../../DataContext';
// CSS Imports
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Header extends Component {
  static contextType = DataContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.clearAuthToken();
    this.context.setUser();
  };

  renderLoginLink() {
    return (
      <div className='login-signup'>
        <Link to='/login'>
          <button className='sign-in-btn'>
            <span>
              <FontAwesomeIcon
                style={{ fontSize: '15px' }}
                icon='sign-in-alt'
              />
            </span>{' '}
            Login
          </button>
        </Link>
        <Link to='/signup'>
          <button className='sign-up-btn'>
            {' '}
            <span>
              <FontAwesomeIcon
                style={{ fontSize: '15px' }}
                icon='user-plus'
              />
            </span>{' '}
            Register
          </button>
        </Link>
      </div>
    );
  }

  renderLogoutLink() {
    return (
      <div className='logout'>
        {/* <Link to='/profile-page'>
          <button className='profile-btn'>
              <FontAwesomeIcon
                style={{ fontSize: '15px' }}
                icon='user-circle'
              />
            Profile
          </button>
        </Link> */}
        <Link onClick={this.handleLogoutClick} to='/'>
          <button className='logout-btn'>
              <FontAwesomeIcon
                style={{ fontSize: '15px' }}
                icon='sign-out-alt'
              />
            Logout
          </button>
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
            alt='strong at every size'
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
