import React, { Component } from 'react';
import TokenService from '../../services/token-service';

export default class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = '';
    password.value = '';
    this.props.onLoginSuccess();
  };
  render() {
    return (
      <div className='login-page' onSubmit={this.handleSubmitBasicAuth}>
        <div className='login-container'>
          <form className='login-form'>
            <h2> Login </h2>

            <input name='user_name' placeholder='username'></input>
            <input name='password' type='password'></input>
            <label htmlFor='remember'> Remember Me </label>
            <button type='submit'> Login </button>
          </form>
        </div>
      </div>
    );
  }
}
