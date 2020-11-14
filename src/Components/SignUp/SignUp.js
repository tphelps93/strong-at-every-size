import React, { Component } from 'react';
import DataContext from '../../DataContext';
import config from '../../config';

export default class SignUp extends Component {
  static contextType = DataContext;

  handleSubmit = event => {
    event.preventDefault();

    const userName = event.target.name.value;
    const userEmail = event.target.email.value;
    const userAddress = event.target.address.value;
    const userState = event.target.state.value;
    const userZip = event.target.zipCode.value;
    const user_name = event.target.userName.value;
    const userPass = event.target.password.value;

    const url = `${config.API_BASE_URL}/users`;
    const options = {
      method: 'POST',
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        address: userAddress,
        state: userState,
        zip: userZip,
        user_name: user_name,
        password: userPass,
      }),
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error(
            'Something went wrong posting "users", please try again later'
          );
        }
        return res.json();
      })
      .then(user => {
        this.context.addUser(user);
        this.props.history.push(`/users/${user.user_id}`);
      })
      .catch(err => console.log(err.message));
  };
  render() {
    return (
      <div className='sign-up-page'>
        <form
          className='signup-form'
          onSubmit={event => this.handleSubmit(event)}
        >
          <h1> Sign Up </h1>

          <input name='name' placeholder='Name'></input>

          <input name='email' placeholder='Email'></input>

          <input name='address' placeholder='Address'></input>

          <select name='state'>
            <option> VA </option>
          </select>

          <input name='zipCode' placeholder='Zip Code'></input>

          <input name='userName' placeholder='User Name'></input>

          <input name='password' type='password'></input>

          <p> What features are you most interested in?</p>
          <select>
            <option> Feature 1 </option>
            <option> Feature 2</option>
          </select>

          <button type='submit'> Submit </button>
        </form>
      </div>
    );
  }
}
