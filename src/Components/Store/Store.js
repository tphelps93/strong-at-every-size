import React, { Component } from 'react';
import StoreItem from './StoreItem/StoreItem';
import Construction from '../ConstructionPage/Construction';
import DataContext from '../../DataContext';
import { Link } from 'react-router-dom';
// CSS Imports
import './Store.css';

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
          <div className='store-item-listing'>
            {/* <StoreItem /> */}
            <Construction />
          </div>
        </div>
      </div>
    );
  }
}
