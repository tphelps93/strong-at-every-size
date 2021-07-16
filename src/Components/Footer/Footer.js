import React, { Component } from 'react';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='social-container'>
          <h4> Follow me! </h4>
          <div className='social-icons'>
            <span>
              {' '}
              <SocialIcon style={{ height: 35, width: 35 }} url='https://www.facebook.com/strongateverysize' />{' '}
            </span>
            <span>
              {' '}
              <SocialIcon style={{ height: 35, width: 35 }} url='https://www.instagram.com/strongateverysize/' />{' '}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
