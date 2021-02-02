import React, { Component } from 'react';
import DataContext from '../../DataContext';
import { Link } from 'react-router-dom';
import { deleteTestimony } from '../../services/api-service';
// CSS Imports
import './Testimonies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Testimonies extends Component {
  static contextType = DataContext;

  handleClickDelete = testimony_id => {
    deleteTestimony(testimony_id)
      .then(testimony => {
        this.context.deleteTestimony(testimony_id);
      })
      .catch(this.context.setError);
  };

  render() {
    const { testimonies, isadmin } = this.context;

    const addTestimonies = isadmin ? (
      <div className='add-testimonies'>
        <Link to='/add-testimony'>
          <button className='add-testimony'>
            <FontAwesomeIcon style={{ fontSize: '15px' }} icon='plus' />
          </button>
        </Link>
      </div>
    ) : (
      ''
    );

    const deleteTestimony = testimony_id => {
      return isadmin ? (
        <div className='delete-testimonies'>
          <button
            name='delete-button'
            onClick={() => this.handleClickDelete(testimony_id)}
            className='delete-testimony'
          >
            <FontAwesomeIcon style={{ fontSize: '15px' }} icon='trash-alt' />
          </button>
        </div>
      ) : (
        ''
      );
    };

    const testimonyList = testimonies.map(testimony => {
      return (
        <div key={testimony.testimony_id} className='client-story'>
          <div className='testimony-container-1'>
            <img
              className='client-img'
              src={`${testimony.photo}`}
              alt='client'
            ></img>
          </div>
          <div className='testimony-container-2'>
            <h4> Client Name </h4>
            <p> {testimony.content} </p>
          </div>
          <div className='testimony-container-3'>
            <p className='date-text'>
              {deleteTestimony(testimony.testimony_id)}
              {testimony.date_created.split('T')[0]}
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className='testimonies'>
        <h2>
          {' '}
          <span>
            <FontAwesomeIcon style={{ fontSize: '35px' }} icon='book-reader' />
          </span>
          Client Stories{' '}
        </h2>
        {testimonyList}
        {addTestimonies}
      </div>
    );
  }
}
