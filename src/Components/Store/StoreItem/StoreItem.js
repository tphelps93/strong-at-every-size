import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../../DataContext';

export default class StoreItem extends Component {
  static contextType = DataContext;
  render() {
    const { items } = this.context;

    const itemsList = items.map(item => {
      return (
        <div key={item.item_id} className='item-listing'>
          <Link to={`/store/${item.item_id}`}>
            <img
              className='store-item-image'
              alt='item'
              src={`${item.photo}`}
            ></img>
          </Link>
          <h4>{item.title}</h4>
          <p>{item.price}</p>
        </div>
      );
    });
    return <div className='store-item'>{itemsList}</div>;
  }
}