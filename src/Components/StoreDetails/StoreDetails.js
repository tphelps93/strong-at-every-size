import React, { Component } from 'react';
import UserReviews from './UserReviews/UserReviews';

export default class StoreDetails extends Component {
  render() {
    return (
      <div className='store-details'>
        <button type='submit' className='cart'>
          {' '}
          Cart{' '}
        </button>
        <div className='item-details'>
          <h1> SAES Tee </h1>
          <img
            className='store-item-image-detailed'
            src='https://www.rollingstone.com/wp-content/uploads/2020/05/Screen-Shot-2020-05-21-at-13.02.55.png'
          ></img>
          <p className='price'> $50 </p>
          <select className='options'>
            {' '}
            <option> Red </option> <option> Blue </option>
            <option> Yellow </option>
          </select>
        </div>

        <h4> Description </h4>
        <p className='desc'>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum
          lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh
          at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus
          libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.
          Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit
          convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam
          eget bibendum metus, non dictum mauris. Nulla at tellus sagittis,
          viverra est a, bibendum metus.
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
          <UserReviews />
          <UserReviews />
          <UserReviews />
          <UserReviews />
        </div>
      </div>
    );
  }
}
