import React, { Component } from 'react';
import DataContext from '../../DataContext';
import { postUser } from '../../services/api-service';

export default class SignUp extends Component {
  static contextType = DataContext;

  handleSubmit = event => {
    event.preventDefault();

    const { name } = event.target;
    const { email } = event.target;
    const { address } = event.target;
    const { state } = event.target;
    const { zip } = event.target;
    const { user_name } = event.target;
    const { password } = event.target;

    postUser(
      name.value,
      email.value,
      address.value,
      state.value,
      zip.value,
      user_name.value,
      password.value
    )
      .then(user => {
        this.context.addUser(user);
      })
      .then(() => {
        name.value = '';
        email.value = '';
        address.value = '';
        state.value = '';
        zip.value = 0;
        user_name.value = '';
        password.value = '';
      })
      .then(() => {
        this.props.history.push('/home');
      })
      .catch(this.context.setError);
  };
  render() {
    return (
      <div className='sign-up-page'>
        <form
          className='sign-up-form'
          onSubmit={event => this.handleSubmit(event)}
        >
          <h2> Sign Up </h2>

          <input name='name' placeholder='Name'></input>

          <input name='email' placeholder='Email'></input>

          <input name='address' placeholder='Address'></input>

          <select name='state' className='select'>
            <option> VA </option>
          </select>

          <input name='zip' placeholder='Zip Code'></input>

          <input name='user_name' placeholder='User Name'></input>

          <input name='password' type='password' placeholder='password'></input>

          <button type='submit'> Submit </button>
        </form>
      </div>
    );
  }
}
