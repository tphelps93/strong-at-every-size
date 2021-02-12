import React, { Component } from 'react';
import UserContext from '../../../DataContext';

export default class ViewUsers extends Component {
  static contextType = UserContext;
  render() {
    const { users } = this.context;

    const userList = users
      .filter(user => {
        return user.isadmin === false;
      })
      .map(user => {
        return (
          <div key={user.user_id} className='user-listing'>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      });
    return <div className='view-users'>{userList}</div>;
  }
}
