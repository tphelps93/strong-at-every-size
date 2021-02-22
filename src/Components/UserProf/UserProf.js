import React, { Component } from 'react';
import PurchaseHistory from './PurchaseHistory/PurchaseHistory';
import UserPrograms from './UserPrograms/UserPrograms';
import DataContext from '../../DataContext';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import config from '../../config';

// CSS Imports
import './UserProf.css';

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
            <div className='user-info'>
              <div className='main-info-box'>
                <img
                  alt='profile'
                  className='profile-image'
                  src={`${config.API_BASE_URL}/uploads/${user.photo}`}
                ></img>
                  <h4> {user.name} </h4>
                  <h4> {user.email} </h4>
                <div className='user-btns'>
                  <Link to='/edit-profile'>
                    <button> Edit Profile </button>
                  </Link>
                </div>
                {/* <div className='user-bio-box'>
                  <p> Hello this is sample bio about the user listed above. </p>
                  <p> This is to be dynamically rendered in the future. </p>
                </div> */}
              </div>
            </div>

            <div className='user-controls-box'>
              <div className='purchase-stats-box'>
                <h3> Purchases </h3>
                <PurchaseHistory />
              </div>
              <div className='programs-box'>
                <h3> Programs </h3>
                <UserPrograms />
              </div>
            </div>
          </div>
        );
      });
    return <div className='user-profile'>{userProfile}</div>;
  }
}
