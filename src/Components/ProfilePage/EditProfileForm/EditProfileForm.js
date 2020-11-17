import React, { Component } from 'react';
import DataContext from '../../../DataContext';

export default class EditProfileForm extends Component {
  static contextType = DataContext;

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { users } = this.context;

    const userProfileEditForm = users.map(user => {
      return (
        <form key={user.user_id} className='edit-admin-form' onSubmit={this.handleSubmit}>
          <h2> Edit Admin Details </h2>

          <img src='#'></img>
          <input name='photo' type='text' placeholder='Photo URL'></input>
          <input name='name' type='text' placeholder='Name'></input>
          <input name='user_name' type='text' placeholder='UserName'></input>
          <input name='email' type='text' placeholder='Email'></input>
          <input name='address' type='text' placeholder='Address'></input>

          <select name='state'>
            <option> VA </option>
          </select>

          <input name='zip' placeholder='Zip Code'></input>
          <button type='submit'> Submit </button>
        </form>
      );
    });
    return <div className='edit-admin'>{userProfileEditForm}</div>;
  }
}
