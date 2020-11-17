import React, { Component } from 'react';
import DataContext from '../../DataContext';
import { Link } from 'react-router-dom';
import { deleteTestimony } from '../../services/api-service';

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
          <button className='add-testimony'> Add Testimony </button>
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
            {' '}
            Delete{' '}
          </button>
        </div>
      ) : (
        ''
      );
    };

    const testimonyList = testimonies.map(testimony => {
      return (
        <div key={testimony.testimony_id} className='client-story'>
          <img
            className='client-img'
            src={`${testimony.photo}`}
            alt='client'
          ></img>
          <p> {testimony.content} </p>
          {deleteTestimony(testimony.testimony_id)}
        </div>
      );
    });
    return (
      <div className='testimonies'>
        {addTestimonies}
        <h2> Client Stories </h2>
        <div className='main-content-stories'>{testimonyList}</div>
      </div>
    );
  }
}
