import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className='login-page'>
        <div className='login-container'>
          <form className='login-form'>
            <h2> Login </h2>

            <input placeholder='Email'></input>
            <input type='password'></input>
            <label for='remember'> Remember Me </label>
            <button type='submit'> Login </button>
          </form>
        </div>
      </div>
    );
  }
}
