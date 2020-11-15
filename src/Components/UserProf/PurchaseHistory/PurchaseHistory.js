import React, { Component } from 'react';
import DataContext from '../../../DataContext';

export default class PurchaseHistory extends Component {
  static contextType = DataContext;
  render() {
    const { purchases } = this.context;

    const userPurchaseList = purchases.map(item => {
      return (
        <div key={item.purchase_id} className='purchase-listing'>
          <h4> {item.title} </h4>
          <p> Price: {item.price} </p>
        </div>
      );
    });
    return <div className='purchase-history'>
      {userPurchaseList}
    </div>;
  }
}
