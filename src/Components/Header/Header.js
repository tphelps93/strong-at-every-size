import React, { Component } from 'react';
import Nav from './Nav';
import smLogo from '../../Images/smLogo.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
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
        <div className='login-signup'>
          <Link to='/login'>
            <button> Login </button>
          </Link>

          <Link to='signup'>
            <button> Sign Up </button>
          </Link>
        </div>
      </div>
    );
  }
}
