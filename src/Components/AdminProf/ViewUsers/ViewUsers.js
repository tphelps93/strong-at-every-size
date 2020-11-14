import React, { Component } from 'react';
import UserContext from '../../../DataContext';

export default class ViewUsers extends Component {
  static contextType = UserContext;
  render() {
    const { users } = this.context;

    const userList = users.filter(user => {
      return user.isAdmin === false;
    }).map(user => {
      return (
        <div className='user-listing'>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      );
    });
    return (
      <div className='view-users'>
          {userList}
      </div>
    );
  }
}

/* Where I left off 
    Currently working on implementing dummy data to
    dynamically render users in to my application. 
    This will be the framework for which I use for the rest
    of my data and for refactoring to utilize my own API.

    I got it working in the ViewUsers component so far.

    * Work on implemening the 'users' data elsewhere in my app.
    * Work on routing.
*/