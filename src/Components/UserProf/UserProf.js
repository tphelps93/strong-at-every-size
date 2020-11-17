import React, { Component } from 'react';
import PurchaseHistory from './PurchaseHistory/PurchaseHistory';
import UserPrograms from './UserPrograms/UserPrograms';
import DataContext from '../../DataContext';
import { Link } from 'react-router-dom';


export default class UserProf extends Component {
  static contextType = DataContext;
  render() {
    const { users } = this.context;

    const userProfile = users.filter(users => {
      return users.isadmin === false;
    }).map(user => {
      return (
        <div key={user.user_id} className='user-profile-container'>
          <div className='main-info-box'>
            <img
              alt='user'
              src={`${user.photo}`}
            ></img>
            <h2> {user.name} </h2>
            <h3> {user.email} </h3>

            <Link to='/edit-profile'>
                <button type='submit'> Edit Profile </button>
              </Link>
          </div>
          <div className='about-me-box'>
            <h5> About Me </h5>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, usu at dicam dolore inimicus. Ad
              voluptua definiebas vim, te vim omnes postulant. Oblique facilisis
              id qui. Eros latine pertinax no pri, his ei lorem nominati. Malis
              tractatos mnesarchum cum ut, at cibo sale pro.
            </p>
          </div>

          <button className='edit-card-btn'> Edit Card Info </button>

          <div className='purchase-stats-box'>
            <PurchaseHistory />
          </div>

          <div className='programs-box'>
            <UserPrograms />
          </div>
        </div>
      );
    });
    return <div className='user-profile'>
      {userProfile}
    </div>;
  }
}
