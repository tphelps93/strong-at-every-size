import React, { Component } from 'react';
import StoreItem from './StoreItem/StoreItem';

export default class Store extends Component {
  render() {
    return (
      <div className='store'>
        <div className='searchBar'>
          <div className='searchInputs'>
            <input name='search' id='search' placeholder='Search'></input>
            <input name='filter' id='filter' placeholder='Search By'></input>
          </div>
          <button type='submit'> Search </button>
        </div>
        

        <div className='main-content-store'>
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
        </div>
      </div>
    );
  }
}
