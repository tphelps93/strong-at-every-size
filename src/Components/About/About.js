import React, { Component } from 'react';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sarah from '../../Images/sarah.jpg';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className='about-page'>
        <div className='main-content-about'>
          <h2>
            {' '}
            <span>
              <FontAwesomeIcon style={{ fontSize: '35px' }} icon='user' />
            </span>
            About Me
          </h2>
          <div className='about-page-content'>
            <img className='trainer-image' src={sarah} alt='sarah phelps'></img>
            <div className='about-section'>
              <p>
                'Sarah is a certified personal trainer through the National
                Academy of Sports Medicine (NASM) who emphasizes a strong at
                every size approach.{' '}
              </p>{' '}
              <p>
                {' '}
                Through her own battles with PCOS, Sarah has learned that the
                scale is just a number and it shouldn't define you. You can be
                strong and fit regardless of your size or the number on the
                scale.
              </p>{' '}
              <p>
                She emphasizes functional movements for improving strength and
                the ability to live life more fully. While on her own health and
                fitness journey, Sarah lives by the philosophy that, your ideal
                weight is whatever weight you reach, when you are mindfully
                nourishing yourself with food and movement that you actually
                enjoy, and fully engaging in your life. (Jennifer Rollin).'
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
