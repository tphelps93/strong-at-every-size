import React, { Component } from 'react';
import { deleteItem } from '../../../services/api-service';
import { Link } from 'react-router-dom';
import DataContext from '../../../DataContext';

export default class StoreItem extends Component {
  static contextType = DataContext;

  handleClickDelete = item_id => {
    deleteItem(item_id)
      .then(item => {
        this.context.deleteItem(item_id);
      })
      .catch(this.context.setError);
  };

  render() {
    const { items, isadmin } = this.context;

    const deleteItemButton = item_id => {
      return isadmin ? (
        <div className='delete-item-container'>
          <button
            name='delete-button'
            className='delete-item-button'
            onClick={() => this.handleClickDelete(item_id)}
          >
            {' '}
            Delete{' '}
          </button>
        </div>
      ) : (
        ''
      );
    };

    const itemsList = items.map(item => {
      { console.log(item.photo)}
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
          {deleteItemButton(item.item_id)}
        </div>
      );
    });
    return <div className='store-item'>{itemsList}</div>;
  }
}
