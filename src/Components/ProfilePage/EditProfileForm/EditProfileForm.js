import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import TokenService from '../../../services/token-service';
import { editUserDetails, uploadPhoto } from '../../../services/api-service';
// CSS Imports
import './EditProfileForm.css';

const initialState = {
  photo: null,
  error: null,
  fileUrl: '',
  name: '',
  user_name: '',
  email: '',
  address: '',
  state: '',
  zip: '',
  nameError: '',
  emailError: '',
  addressError: '',
  zipError: '',
};
export default class EditProfileForm extends Component {
  state = { initialState };
  static contextType = DataContext;

  handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  handleFile = e => {
    const photo = e.target.files[0];
    const formData = new FormData();
    formData.append('photo', photo);
    uploadPhoto(formData).then(res => {
      this.setState({
        photo: res.Key,
        fileUrl: URL.createObjectURL(photo),
      });
    });
  };

  handleSubmit = event => {
    const user_id = TokenService.jwtDecode(TokenService.getAuthToken()).payload
      .user_id;
    event.preventDefault();
    const photo = this.state.photo;
    const { name } = event.target;
    const { user_name } = event.target;
    const { email } = event.target;
    const { address } = event.target;
    const { state } = event.target;
    const { zip } = event.target;

    editUserDetails(
      user_id,
      photo,
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

              {this.state.fileUrl ? (
                <img src={`${this.state.fileUrl}`} alt='uploaded-file'></img>
              ) : (
                ''
              )}

              <input
                onChange={this.handleFile}
                name='photo'
                type='file'
                accept='image/jpg,image/jpeg'
              ></input>
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
