import React, { Component } from 'react';
import UsersContext from '../../../DataContext';

export default class UserPrograms extends Component {
  static contextType = UsersContext;
  render() {
    const { user_purchases } = this.context;

    const userProgramList = user_purchases.filter(item => {
      return item.type === 'program';
    }).map(program => {
      return (
        <div key={program.id} className='user-program-listing'>
          <h2> {program.title} </h2>
          <p> Price: {program.price} </p>
        </div>
      );
    });
    return <div className='user-programs'>
      {userProgramList}
    </div>;
  }
}
