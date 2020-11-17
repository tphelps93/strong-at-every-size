import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { postReview } from '../../../services/api-service';

export default class ReviewForm extends Component {
  static contextType = DataContext;

  handleSubmit = ev => {
    ev.preventDefault();
    const { content } = ev.target;
    const { rating } = ev.target;
    const itemId = this.props.itemId;
    postReview(content.value, rating.value, itemId)
      .then((newReview) => this.context.addReview(newReview))
      .then(() => {
        content.value = '';
        rating.value = 0;
      })
      .catch(this.context.setError);
  };

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
