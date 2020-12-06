import React, { Component } from 'react';
import PurchaseHistory from './PurchaseHistory/PurchaseHistory';
import UserPrograms from './UserPrograms/UserPrograms';
import DataContext from '../../DataContext';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default class UserProf extends Component {
  static contextType = DataContext;
  render() {
    const { users } = this.context;
    const userProfile = users
      .filter(user => {
        return (
          user.user_id ==
          TokenService.jwtDecode(TokenService.getAuthToken()).payload.user_id
        );
      })
      .map(user => {
        return (
          <div key={user.user_id} className='user-profile-container'>
            <div className='main-info-box'>
              <img
                alt=''
                className='profile-image'
                src={`${user.photo}`}
              ></img>
              <h2> {user.name} </h2>
              <h3> {user.email} </h3>
              <div className='user-btns'>
                <Link to='/edit-profile'>
                  <button> Edit Profile </button>
                </Link>
              </div>
            </div>

            <div className='user-controls-box'>
              <h2> Purchases </h2>
              <div className='purchase-stats-box'>
                <PurchaseHistory />
              </div>
              <h2> Programs </h2>
              <div className='programs-box'>
                <UserPrograms />
              </div>
            </div>
          </div>
        );
      });
    return <div className='user-profile'>{userProfile}</div>;
  }
}
