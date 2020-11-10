import React, { Component } from 'react';
import PurchaseHistory from './PurchaseHistory/PurchaseHistory';
import UserPrograms from './UserPrograms/UserPrograms';

export default class UserProf extends Component {
  render() {
    return (
      <div className='user-profile'>
        <div className='user-profile-container'>
          <div className='main-info-box'>
            <img src='https://i2.wp.com/airlinkflight.org/wp-content/uploads/2019/02/male-placeholder-image.jpeg?ssl=1'></img>
            <h2> Debby Smith </h2>
            <h3> debbysmith@gmail.com </h3>

            <button type='submit'> Edit Profile </button>
        </div>
            <div className='about-me-box'>
              <h5> About Me </h5>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, usu at dicam dolore inimicus. Ad
                voluptua definiebas vim, te vim omnes postulant. Oblique
                facilisis id qui. Eros latine pertinax no pri, his ei lorem
                nominati. Malis tractatos mnesarchum cum ut, at cibo sale pro.
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
      </div>
    );
  }
}