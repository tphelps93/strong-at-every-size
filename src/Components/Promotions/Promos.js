import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';

import { deletePromo } from '../../services/api-service';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Promos.css';
// Context Imports
import DataContext from '../../DataContext';

export default class Promos extends Component {
  static contextType = DataContext;

  handleClickDeletePromo = promo_id => {
    deletePromo(promo_id)
      .then(promo => {
        this.context.deletePromo(promo_id);
      })
      .catch(this.context.setError);
  };

  render() {
    const { promos, isadmin } = this.context;
    let addPromosBtn;

    addPromosBtn = isadmin ? (
      <div key={promos.promo_id} className='add-promo-btn'>
        <Link to='/add-promo'>
          <button className='add-promo-button'>
            {' '}
            <FontAwesomeIcon style={{ fontSize: '15px' }} icon='plus' />
          </button>
        </Link>
      </div>
    ) : (
      ''
    );

    const deletePromoButton = promo_id => {
      return isadmin ? (
        <div key={promos.promo_id} className='delete-promo-container'>
          <button
            name='delete-button'
            className='delete-promo-button'
            onClick={() => this.handleClickDeletePromo(promo_id)}
          >
            <FontAwesomeIcon style={{ fontSize: '15px' }} icon='trash-alt' />
          </button>
        </div>
      ) : (
        ''
      );
    };

    const promosList = promos.reverse().map(promo => {
      return (
        <div key={promo.promo_id} className='promo-listing'>
          <h4> {promo.title} </h4>
          <img
            src={`${config.API_BASE_URL}/uploads/${promo.photo}`}
            alt='promotion'
          />
          <p className='promo-content'> {promo.content} </p>
          <p className='date-text'>
            {' '}
            {deletePromoButton(promo.promo_id)} Posted:{' '}
            {promo.date_created.split('T')[0]}{' '}
          </p>
        </div>
      );
    });
    return (
      <div className='promotions-page'>
        <h2>
          <span>
            <FontAwesomeIcon style={{ fontSize: '35px' }} icon='bullhorn' />
          </span>
          Promotions{' '}
        </h2>
        {promosList}
        {addPromosBtn}
      </div>
    );
  }
}
