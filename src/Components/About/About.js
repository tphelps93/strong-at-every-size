import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='about'>
          <div className='image-container'>
            <img
              className='trainer-image'
              src='https://investoregon.com/wp-content/uploads/2018/10/female-placeholder.jpg'
              alt='sarah phelps'
            ></img>
          </div>
        <div className='main-content-about'>
            <h3> About Sarah </h3>
            <p> 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum." 
            
            "Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
            </p>
        </div>
      </div>
    );
  }
}
