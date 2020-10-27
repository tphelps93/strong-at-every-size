import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className='nav'>
          <a href='#'> About </a>
          <a href='#'> Contact </a>
          <a href='#'> Client Stories </a>
          <a href='#'> Store </a>
      </div>
    );
  }
}