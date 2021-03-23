import React, { Component } from 'react';
import ViewUsers from './ViewUsers/ViewUsers';
import ViewStoreStats from './ViewStoreStats/ViewStoreStats';
import DataContext from '../../DataContext';
import { fetchUploads } from '../../services/api-service';
import { Link } from 'react-router-dom';
import config from '../../config';
// CSS Imports
import './AdminProf.css';

export default class AdminProf extends Component {
  static contextType = DataContext;

  render() {
    const { users, photos } = this.context;

    const insertPhotos = photos.map(photo => {
      return (
        <div key={`${photo.Key}`} className='photo'>
          {/* <img alt='admin' className='profile-image' src={`${URL.createObjectURL(photo)}`}></img> */}
        </div>
      );
    });

    const adminProfile = users
      .filter(user => {
        return user.isadmin === true;
      })
      .map(user => {
        return (
          <div key={user.user_id} className='admin-container'>
            <div className='admin-info'>
              <div className='admin-main-info-box'>
                {insertPhotos}
                <h4> {user.name} </h4>
                <h4> {user.email} </h4>
                <Link to='/edit-profile'>
                  <button type='submit'> Edit Profile </button>
                </Link>
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
