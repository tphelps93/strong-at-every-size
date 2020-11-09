import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <h2> Contact Me </h2>
        <form path='/contact'>
          <div className='main-content-contact'>
            <label for='name'> Name </label>
            <input name='name' id='name' placeholder='Name'></input>

            <label for='email'> Email </label>
            <input name='email' id='email' placeholder='Email'></input>

            <label for='message'> Message </label>
            <textarea
              name='message'
              id='message'
              placeholder='Message'
            ></textarea>

            <button type='submit'> Submit </button>
          </div>
        </form>
      </div>
    );
  }
}
