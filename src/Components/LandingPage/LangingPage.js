import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div className='landing-page'>
        <div className='landing-page-container'>
          <h2> Welcome to Strong At Every Size! </h2>
          <p> Here we believe anyone shape or size can live a healthy and strong lifestyle! </p>
          <p></p>
          <Link to='/home'>
            <button> Enter Site </button>
          </Link>
        </div>
      </div>
    );
  }
}
