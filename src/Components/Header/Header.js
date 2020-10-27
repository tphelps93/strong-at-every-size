import React, { Component } from 'react';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img
          className='logo'
          src='https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png'
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
