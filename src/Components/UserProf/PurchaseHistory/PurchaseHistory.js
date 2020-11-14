import React, { Component } from 'react';
import UsersContext from '../../../DataContext';

export default class PurchaseHistory extends Component {
  static contextType = UsersContext;
  render() {
    const { user_purchases } = this.context;

    const userPurchaseList = user_purchases.map(item => {
      return (
        <div key={item.id} className='purchase-listing'>
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
