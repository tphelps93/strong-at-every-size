import React, { Component } from 'react';
import ViewUsers from './ViewUsers/ViewUsers';
import ViewStoreStats from './ViewStoreStats/ViewStoreStats';
import DataContext from '../../DataContext';
import { Link } from 'react-router-dom';
import config from '../../config';
// CSS Imports
import './AdminProf.css';

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
            <div className='admin-info'>
              <div className='admin-main-info-box'>
                <img
                  alt='admin'
                  className='profile-image'
                  src={`${config.API_BASE_URL}/uploads/${user.photo}`}
                ></img>

                <h4> {user.name} </h4>
                <p> {user.email} </p>
                <Link to='/edit-profile'>
                  <button type='submit'> Edit Profile </button>
                </Link>
              </div>
              <div className='bio-box'>
                <p> Hello this is sample bio about the user listed above. </p>
                <p> This is to be dynamically rendered in the future. </p>
              </div>
            </div>
            <div className='admin-control-box'>
              <div className='view-users-box'>
                <h3> User List </h3>
                <ViewUsers />
              </div>
              <div className='store-stats-box'>
                <h3> Store Statistics </h3>
                <ViewStoreStats />
              </div>
            </div>
          </div>
        );
      });
    return <div className='admin-profile'>{adminProfile}</div>;
  }
}
