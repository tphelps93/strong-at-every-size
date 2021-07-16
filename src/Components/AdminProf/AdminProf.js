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

  renderUserPhoto = userPhoto => {
    const photos = this.context.photos;
    let element = <img src="" alt='user'></img>;
    photos.filter(p => {
      return p.Key === userPhoto;
    })
    .map(p => {
      console.log(p);
      return (element = <img src={`${p.Key}`} alt='user'></img>)
    });
    return element;
  }

  render() {
    const { users, photos } = this.context;

    console.log(photos);
    console.log(users);
    const adminProfile = users
      .filter(user => {
        return user.isadmin === true;
      })
      .map(user => {
        return (
          <div key={user.user_id} className='admin-container'>
            <div className='admin-info'>
              <div className='admin-main-info-box'>
                {this.renderUserPhoto(user.photo)}
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
