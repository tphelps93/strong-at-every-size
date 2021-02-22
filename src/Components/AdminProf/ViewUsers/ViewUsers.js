import React, { Component } from 'react';
import UserContext from '../../../DataContext';
// CSS Imports
import './ViewUsers.css';

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
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
          </div>
        );
      });
    return <div className='view-users'>{userList}</div>;
  }
}
