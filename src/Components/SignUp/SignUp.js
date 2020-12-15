import React, { Component } from 'react';
import DataContext from '../../DataContext';
import { postUser } from '../../services/api-service';

const initialState = {
  name: '',
  email: '',
  address: '',
  state: '',
  zip: '',
  user_name: '',
  password: '',
  nameError: '',
  emailError: '',
  user_nameError: '',
  passwordError: '',
};

export default class SignUp extends Component {
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

  validate = () => {
    let nameError = '';
    let emailError = '';
    let user_nameError = '';
    let passwordError = '';

    // Name  Validation
    if (!this.state.name) {
      nameError = 'Name is Required.';
    }

    // Email Validation

    if (!this.state.email) {
      emailError = 'Email is Required.';
    }

    // Password Validation

    if (!this.state.password) {
      passwordError = 'Password is Required';
    }

    // UserName Validation

    if (!this.state.user_name) {
      user_nameError = 'User Name is required';
    }

    if (emailError || nameError || passwordError || user_nameError) {
      this.setState({ emailError, nameError, passwordError, user_nameError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = event.target;
    const { email } = event.target;
    const { address } = event.target;
    const { state } = event.target;
    const { zip } = event.target;
    const { user_name } = event.target;
    const { password } = event.target;
    const isValid = this.validate();
    if (isValid) {
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
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className='sign-up-page'>
        <form
          className='sign-up-form'
          onSubmit={event => this.handleSubmit(event)}
        >
          <h2> Sign Up </h2>

          <input
            onChange={this.handleChange}
            value={this.state.name}
            autoFocus='on'
            name='name'
            placeholder='Name'
          ></input>
          <div style={{ color: 'red', fontSize: 20 }}>
            {' '}
            {this.state.nameError}{' '}
          </div>

          <input
            onChange={this.handleChange}
            value={this.state.email}
            name='email'
            placeholder='Email'
          ></input>
          <div style={{ color: 'red', fontSize: 20 }}>
            {' '}
            {this.state.emailError}{' '}
          </div>

          <input name='address' placeholder='Address'></input>

          <select name='state' className='select'>
            <option> VA </option>
          </select>

          <input name='zip' placeholder='Zip Code'></input>

          <input
            onChange={this.handleChange}
            value={this.state.user_name}
            name='user_name'
            placeholder='User Name'
          ></input>
          <div style={{ color: 'red', fontSize: 20 }}>
            {' '}
            {this.state.user_nameError}{' '}
          </div>
          <input
            onChange={this.handleChange}
            value={this.state.password}
            name='password'
            type='password'
            placeholder='password'
          ></input>
          <div style={{ color: 'red', fontSize: 20 }}>
            {' '}
            {this.state.passwordError}{' '}
          </div>
          <button type='submit'> Submit </button>
        </form>
      </div>
    );
  }
}
