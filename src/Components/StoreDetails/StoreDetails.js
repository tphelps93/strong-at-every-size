import React, { Component } from 'react';
import UserReviews from './UserReviews/UserReviews';
import DataContext from '../../DataContext';
import ReviewForm from './ReviewForm/ReviewForm';

export default class StoreDetails extends Component {
  static contextType = DataContext;

  render() {
    const { items } = this.context;

    const itemDetails = items.filter(item => {
      return item.item_id == this.props.match.params.item_id
    })
    .map(item => {
      return (
        <div key={item.item_id} className='item-details'>
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

        <ReviewForm itemId={this.props.match.params.item_id}/>

        <div className='userReviews'>
          <UserReviews itemId={this.props.match.params.item_id}/>
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
