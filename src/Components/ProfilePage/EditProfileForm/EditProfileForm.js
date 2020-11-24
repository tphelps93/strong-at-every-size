import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import TokenService from '../../../services/token-service';
import { editUserDetails } from '../../../services/api-service';

export default class EditProfileForm extends Component {
  static contextType = DataContext;

  handleSubmit = event => {
    const user_id = TokenService.jwtDecode(TokenService.getAuthToken()).payload
      .user_id;
    event.preventDefault();
    const { photo } = event.target;
    const { name } = event.target;
    const { user_name } = event.target;
    const { email } = event.target;
    const { address } = event.target;
    const { state } = event.target;
    const { zip } = event.target;

    editUserDetails(
      user_id,
      photo.value,
      name.value,
      user_name.value,
      email.value,
      address.value,
      state.value,
      zip.value
    )
      .then(updatedUser => {
        this.context.editProfile(updatedUser);
      })
      .then(() => {
        photo.value = '';
        name.value = '';
        user_name.value = '';
        email.value = '';
        address.value = '';
        state.value = '';
        zip.value = 0;
      })
      .then(() => {
        this.props.history.push('/profile-page');
      })
      .catch(this.context.setError);
  };

  render() {
    const { users } = this.context;
    const userProfileEditForm = users
      .filter(user => {
        return (
          user.user_id ==
          TokenService.jwtDecode(TokenService.getAuthToken()).payload.user_id
        );
      })
      .map(user => {
        return (
          <div key={user.user_id} className='edit-profile-page'>
            <form
              key={user.user_id}
              className='edit-profile-form'
              onSubmit={this.handleSubmit}
            >
              <h2> Edit Details </h2>

              <img alt='placeholder profile image' placeholder='https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png' className='edit-form-photo' src={user.photo}></img>
              <input name='photo' type='text' defaultValue={user.photo}></input>
              <input name='name' type='text' defaultValue={user.name}></input>
              <input
                name='user_name'
                type='text'
                defaultValue={user.user_name}
              ></input>
              <input name='email' type='text' defaultValue={user.email}></input>
              <input
                name='address'
                type='text'
                defaultValue={user.address}
              ></input>

              <select name='state' defaultValue={user.state}>
                <option> VA </option>
              </select>

              <input name='zip' defaultValue={user.zip}></input>
              <button type='submit'> Submit </button>
            </form>
          </div>
        );
      });
    return <div className='edit-profile'>{userProfileEditForm}</div>;
  }
}
