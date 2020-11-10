import React, { Component } from 'react';
import Nav from './Nav';
import logo from '../../Images/saes-transparent.png'
import smLogo from '../../Images/smLogo.png'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img
          className='logo' alt='strong at every size logo'
          src={smLogo}
        ></img>
        <Nav />
        <div className='login-signup'>
          <button> Login </button>
          <button> Sign Up </button>
        </div>
      </div>
    );
  }
}
