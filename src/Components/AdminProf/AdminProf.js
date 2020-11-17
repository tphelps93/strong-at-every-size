import React, { Component } from 'react';
import ViewUsers from './ViewUsers/ViewUsers';
import ViewStoreStats from './ViewStoreStats/ViewStoreStats';
import DataContext from '../../DataContext';
import { Link } from 'react-router-dom';

export default class AdminProf extends Component {
  static contextType = DataContext;
  render() {
    const { users } = this.context;

    const adminProfile = users
      .filter(user => {
        return user.isadmin === true;
      })
      .map(user => {
        return (
          <div key={user.user_id} className='admin-container'>
            <div className='admin-main-info-box'>
              <img alt='admin' src={`${user.photo}`}></img>

              <h2> {user.name} </h2>
              <h3> {user.email} </h3>
              <Link to='/edit-profile'>
                <button type='submit'> Edit Profile </button>
              </Link>
            </div>
            <div className='admin-control-box'>
              <div className='view-users-box'>
                <ViewUsers />
              </div>

              <div className='store-stats-box'>
                <ViewStoreStats />
              </div>
            </div>
          </div>
        );
      });
    return <div className='admin-profile'>{adminProfile}</div>;
  }
}
