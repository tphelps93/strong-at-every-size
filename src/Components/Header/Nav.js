import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <Link to='/about'>
          <li> About </li>
        </Link>

        <Link to='/contact'>
          <li> Contact </li>
        </Link>

        <Link to='/testimonies'>
          <li> Testimonies </li>
        </Link>

        <Link to='/store'>
          <li> Store </li>
        </Link>
      </div>
    );
  }
}
