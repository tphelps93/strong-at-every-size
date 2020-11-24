import React, { Component } from 'react';
import DataContext from '../../../DataContext';

export default class UserReviews extends Component {
  static contextType = DataContext;

  render() {
    const { reviews, users } = this.context;
    const filteredList = reviews.filter(review => {
      return review.itemid == this.props.itemId;
    });
    const userReviewList = filteredList.map(review => {
      return (
        <div key={review.review_id} className='review-listing'>
          <div className='review-headers'>
            <h5 className='review-name'> Taylor Phelps </h5>
            <h5 className='review-rate'> Rating: {review.rating} </h5>
          </div>
          <p>{review.content}</p>
        </div>
      );
    });
    return <div className='user-reviews'>{userReviewList}</div>;
  }
}
