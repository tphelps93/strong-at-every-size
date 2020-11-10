import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <div className='sign-up-page'>
        <form className='signup-form'>
          <h1> Sign Up </h1>

          <input placeholder='Name'></input>

          <input placeholder='Email'></input>

          <input placeholder='Address'></input>

          <select>
            <option> State </option>
          </select>

          <input placeholder='Zip Code'></input>

          <input placeholder='Phone Number'></input>

          <input type='password'></input>
          <input type='password'></input>

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