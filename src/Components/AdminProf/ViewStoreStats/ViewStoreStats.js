import React, { Component } from 'react';
import UserContext from '../../../DataContext';

export default class ViewStoreStats extends Component {
  static contextType = UserContext;
  render() {
    const { purchases } = this.context;

    const allUserPurchases = purchases.map(soldItem => {
      return (
        <div key={soldItem.purchase_id} className='sold-items'>
          <h4> {soldItem.title} </h4>
          <p> {soldItem.price} </p>
        </div>
      );
    });
    return <div className='view-store-stats'>{allUserPurchases}</div>;
  }
}
