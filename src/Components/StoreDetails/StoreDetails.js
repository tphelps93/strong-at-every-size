import React, { Component } from 'react';
import UserReviews from './UserReviews/UserReviews';
import UserContext from '../../UsersContext';

export default class StoreDetails extends Component {
  static contextType = UserContext;
  render() {
    const { items } = this.context;
    const itemDetails = items.filter(item => {
      return item.id == this.props.match.params.id
    })
    .map(item => {
      return (
        <div key={item.id} className='item-details'>
                  <button type='submit' className='cart'>
          {' '}
          Cart{' '}
        </button>
        <div className='item-details'>
          <h1> {item.title} </h1>
          <img alt='item'
            className='store-item-image-detailed'
            src={`${item.photo}`}
          ></img>
          <p className='price'> {item.price} </p>
          <select className='options'>
            {' '}
            <option> Red </option> <option> Blue </option>
            <option> Yellow </option>
          </select>
        </div>

        <h4> Description </h4>
        <p className='desc'>
          {item.description}
        </p>

        <h4> Reviews </h4>

        <div className='review-field'>
          <h6> Write A Review </h6>
          <select>
            <option> 5 </option>
            <option> 4 </option>
            <option> 3 </option>
            <option> 2 </option>
            <option> 1 </option>
          </select>
          <textarea className='review-field'></textarea>
          <button type='submit'> Submit Review </button>
        </div>

        <div className='userReviews'>
          <UserReviews />
        </div>
        </div>
      )
    })
    return (
      <div className='store-details'>
        {itemDetails}
      </div>
    );
  }
}
