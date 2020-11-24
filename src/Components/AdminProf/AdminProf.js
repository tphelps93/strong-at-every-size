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
              <img placeholder='https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png' alt='admin' className='profile-image' src={`${user.photo}`}></img>

              <p> {user.name} </p>
              <p> {user.email} </p>
              <Link to='/edit-profile'>
                <button type='submit'> Edit Profile </button>
              </Link>
            </div>
            <div className='admin-control-box'>
              <h2> User List </h2>
              <div className='view-users-box'>
                <ViewUsers />
              </div>
              <h2> Store Statistics </h2>
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
