import React, { Component } from 'react';
import DataContext from '../../DataContext';

export default class Testimonies extends Component {
  static contextType = DataContext;
  render() {
    const { testimonies } = this.context;

    const testimonyList = testimonies.map(testimony => {
      return (
        <div key={testimony.testimony_id} className='client-story'>
          <img
            className='client-img'
            src={`${testimony.photo}`}
            alt='client'
          ></img>
          <p> {testimony.content} </p>
        </div>
      );
    });
    return (
      <div className='testimonies'>
        <h2> Client Stories </h2>
        <div className='main-content-stories'>
          {testimonyList}
        </div>
      </div>
    );
  }
}
