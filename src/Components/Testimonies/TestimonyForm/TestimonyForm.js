import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { postTestimony } from '../../../services/api-service';

export default class PromoForm extends Component {
  static contextType = DataContext;

  handleSubmit = event => {
    event.preventDefault();
    const { photo } = event.target;
    const { content } = event.target;
    postTestimony(photo.value, content.value)
      .then(testimony => {
        this.context.addTestimony(testimony);
      })
      .then(() => {
        photo.value = '';
        content.value = '';
      })
      .then(() => {
        this.props.history.push('/testimonies');
      })
      .catch(this.context.setError);
  };
  render() {
    return (
      <div className='testimony-page'>
        <form className='testimony-form' onSubmit={this.handleSubmit}>
          <h2> Add A New Promo </h2>

          <input
            name='photo'
            className='testimony-photo'
            placeholder='Photo URL'
          ></input>
          <textarea
            name='content'
            className='promo-content'
            placeholder='Content'
          ></textarea>
          <button type='submit'> Submit </button>
        </form>
      </div>
    );
  }
}
