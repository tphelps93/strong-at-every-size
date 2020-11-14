import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { postReview } from '../../../services/api-service';

export default class ReviewForm extends Component {
  static contextType = DataContext;

  handleSubmit = ev => {
    ev.preventDefault();
    const { reviews } = this.context;
    const { content } = ev.target;
    const { rating } = ev.target;
    postReview(reviews.review_id, content.value, rating.value)
      .then(() => this.context.addReview)
      .then(() => {
        content.value = '',
        rating.value = ''
      })
      .catch(this.context.setError);
  };

  /* Trying to get the review form on the itemDetails page to work properly */

  render() {
    return (
      <div className='review-field'>
        <form className='review-form' onSubmit={this.handleSubmit}>
          <h6> Write A Review </h6>
          <select name='rating'>
            <option> 5 </option>
            <option> 4 </option>
            <option> 3 </option>
            <option> 2 </option>
            <option> 1 </option>
          </select>
          <textarea name='content' className='review-field'></textarea>
          <button type='submit'> Submit Review </button>
        </form>
      </div>
    );
  }
}
