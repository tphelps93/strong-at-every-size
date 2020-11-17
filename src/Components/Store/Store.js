import React, { Component } from 'react';
import StoreItem from './StoreItem/StoreItem';
import DataContext from '../../DataContext';
import { Link } from 'react-router-dom';

export default class Store extends Component {
  static contextType = DataContext;
  render() {
    const { isadmin } = this.context;

    const addItem = isadmin ? (
      <div className='add-item-container'>
        <Link to='/add-item'>
          <button className='add-item-button'> Add Item </button>
        </Link>
      </div>
    ) : (
      ''
    );
    return (
      <div className='store'>
        <div className='searchBar'>
          <div className='searchInputs'>
            <input name='search' id='search' placeholder='Search'></input>
            <input name='filter' id='filter' placeholder='Search By'></input>
          </div>
          <button type='submit'> Search </button>
          {addItem}
        </div>

        <div className='main-content-store'>
          <StoreItem />
        </div>
      </div>
    );
  }
}
