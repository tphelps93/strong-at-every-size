import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div className='landing-page'>
        <div className='landing-page-container'>
          <h2> Welcome to Strong At Every Size! </h2>
          <p>
            {' '}
            This is a website that I built for my wife, Sarah. She is a personal
            trainer and has been wanting a website to run her business for quite
            some time, so I figured this would be the perfect opportunity to
            create one!
          </p>
          <p> NOTE: There are things that you won't be able to do unless you are an admin.</p>
              <p> In order to properly evaluate this application create your own account and 
              test things out. Then login with the credentials below and test out the admin experience.
              For the sake of testing, I increased the JWT Expiry time to 20 minutes to give ample time
              to test things out without interruption.</p>

              <p> user_name: bblue </p>
              <p> password: Password1! </p>
          <p> Click the button below and we'll get started! </p>
          <Link to='/home'>
            <button> Enter Site </button>
          </Link>
        </div>
      </div>
    );
  }
}
