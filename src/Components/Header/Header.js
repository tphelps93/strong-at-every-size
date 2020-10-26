import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img
          className='logo'
          src='https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png'
        ></img>
        <h2> Strong At Every Size </h2>
      </div>
    );
  }
}
