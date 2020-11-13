import React, { Component } from 'react';
import UsersContext from '../../../UsersContext';

export default class UserReviews extends Component {
  static contextType = UsersContext;
  render() {
    const { user_reviews } = this.context;

    const userReviewList = user_reviews.map(review => {
      return (
        <div key={review.id} className='review-listing'>
          <h4> Reviews </h4>
          <p> Rating: {review.rating} </p>
          <p>
            {review.content}
          </p>
        </div>
      );
    });
    return <div className='user-reviews'>
      {userReviewList}
    </div>;
  }
}
