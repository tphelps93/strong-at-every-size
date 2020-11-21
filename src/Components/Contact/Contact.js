import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <form path='/contact' className='contact-form'>
          <div className='main-content-contact'>
            <h2> Contact Me </h2>

            <input name='name' id='name' placeholder='Name'></input>

            <input name='email' id='email' placeholder='Email'></input>

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
