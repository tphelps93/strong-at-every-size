import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { Link } from 'react-router-dom';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import sarah from '../../../Images/sarah.jpg';

export default class Home extends Component {
  static contextType = DataContext;
  render() {
    return (
      <div className='home'>
        <div className='slideshow'></div>
        <div className='main-content-home'>
          <div className='nav-buttons'>
            <Link to='/promos' style={{ textDecoration: 'none' }}>
              <div className='promos'>
                <h3>
                  {' '}
                  <span>
                    <FontAwesomeIcon
                      style={{ fontSize: '35px' }}
                      icon='bullhorn'
                    />
                  </span>{' '}
                  Promotions{' '}
                </h3>
              </div>
            </Link>

            <Link to='/news' style={{ textDecoration: 'none' }}>
              <div className='updates'>
                <h3>
                  {' '}
                  <span>
                    <FontAwesomeIcon
                      style={{ fontSize: '35px' }}
                      icon='newspaper'
                    />
                  </span>
                  News{' '}
                </h3>
              </div>
            </Link>
          </div>{' '}
          <div className='about'>
            <h2>
              {' '}
              <span>
                <FontAwesomeIcon style={{ fontSize: '35px' }} icon='user' />
              </span>
              About Me{' '}
            </h2>
            <div className='about-content'>
              <img src={sarah} alt='sarah phelps'></img>
              <div className='about-content-para'>
                <p>
                  I am a certified personal trainer through the National Academy
                  of Sports Medicine (NASM) who emphasizes a strong at every
                  size approach.
                </p>
                <p>
                  Through my own battles with PCOS, I have learned that the
                  scale is just a number and it shouldn't define you. You can be
                  strong and fit regardless of your size or the number on the
                  scale.
                </p>
                <Link to='/about'>
                <button>
                  {' '}
                  Learn More{' '}
                  <FontAwesomeIcon
                    style={{ fontSize: '20px' }}
                    icon='chevron-right'
                  />
                </button>
              </Link>
              </div>
            </div>
          </div>
          <div className='mission'>
            <h2>
              {' '}
              <span>
                <FontAwesomeIcon style={{ fontSize: '35px' }} icon='dumbbell' />
              </span>
              My Mission{' '}
            </h2>
            <p>
              I emphasize functional movements for improving strength and the
              ability to live life more fully. I live by the philosophy that,
              your ideal weight is whatever weight you reach, when you are
              mindfully nourishing yourself with food and movement that you
              actually enjoy, and fully engaging in your life. (Jennifer
              Rollin).'
            </p>
          </div>
          <div className='approaches'>
            <div className='approach-1'>
              <span>
                <FontAwesomeIcon style={{ fontSize: '35px' }} icon='book' />
              </span>
              <p>
                {' '}
                Select from a list of pre-constructed workout plans to help
                kick-start your goals!{' '}
              </p>
            </div>
            <div className='approach-2'>
              <span>
                <FontAwesomeIcon style={{ fontSize: '35px' }} icon='tools' />
              </span>
              <p>
                {' '}
                Gain personal training sessions in-person or online and a
                customized workout to fit your lifestyle and body-type!{' '}
              </p>
            </div>
          </div>
          '
        </div>
      </div>
    );
  }
}
