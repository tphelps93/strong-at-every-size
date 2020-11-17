import React, { Component } from 'react';
import DataContext from '../../../DataContext';

export default class UserReviews extends Component {
  static contextType = DataContext;

  render() {
    const { reviews } = this.context;
    const filteredList = reviews.filter(review => {
      return review.itemid == this.props.itemId;
    });
    const userReviewList = filteredList.map(review => {
      return (
        <div key={review.review_id} className='review-listing'>
          <h4> Reviews </h4>
          <p> Rating: {review.rating} </p>
          <p>{review.content}</p>
        </div>
      );
    });
    return <div className='user-reviews'>{userReviewList}</div>;
  }
}
