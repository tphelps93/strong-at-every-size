import React, { Component } from 'react';
import ViewUsers from './ViewUsers/ViewUsers';
import ViewStoreStats from './ViewStoreStats/ViewStoreStats';

export default class AdminProf extends Component {
  render() {
    return (
      <div className='admin-profile'>
        <div className='admin-container'>
          <div className='admin-main-info-box'>
            <img alt='admin' src='https://i2.wp.com/airlinkflight.org/wp-content/uploads/2019/02/male-placeholder-image.jpeg?ssl=1'></img>

            <h2> Sarah Phelps </h2>
            <h3> sd188@gmail.com </h3>
            <button type='submit'> Edit Profile </button>
          </div>
          <div className='admin-control-box'>
            <div className='view-users-box'>
              <ViewUsers />
            </div>

            <div className='store-stats-box'>
              <ViewStoreStats />
              <ViewStoreStats />
              <ViewStoreStats />
              <ViewStoreStats />
              <ViewStoreStats /> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}