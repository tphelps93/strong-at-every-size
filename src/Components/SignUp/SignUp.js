import React, { Component } from 'react';
import DataContext from '../../DataContext';
import { postUser } from '../../services/api-service';
// CSS Imports
import './SignUp.css';

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
          this.props.history.push('/');
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
            <option>Alabama - AL</option>
            <option>Alaska - AK</option>
            <option>Arizona - AZ</option>
            <option>Arkansas - AR</option>
            <option>California - CA</option>
            <option>Colorado - CO</option>
            <option>Connecticut - CT</option>
            <option>Delaware - DE</option>
            <option>Florida - FL</option>
            <option>Georgia - GA</option>
            <option>Hawaii - HI</option>
            <option>Idaho - ID</option>
            <option>Illinois - IL</option>
            <option>Indiana - IN</option>
            <option>Iowa - IA</option>
            <option>Kansas - KS</option>
            <option>Kentucky - KY</option>
            <option>Louisiana - LA</option>
            <option>Maine - ME</option>
            <option>Maryland - MD</option>
            <option>Massachusetts - MA</option>
            <option>Michigan - MI</option>
            <option>Minnesota - MN</option>
            <option>Mississippi - MS</option>
            <option>Missouri - MO</option>
            <option>Montana - MT</option>
            <option>Nebraska - NE</option>
            <option>Nevada - NV</option>
            <option>New Hampshire - NH</option>
            <option>New Jersey - NJ</option>
            <option>New Mexico - NM</option>
            <option>New York - NY</option>
            <option>North Carolina - NC</option>
            <option>North Dakota - ND</option>
            <option>Ohio - OH</option>
            <option>Oklahoma - OK</option>
            <option>Oregon - OR</option>
            <option>Pennsylvania - PA</option>
            <option>Rhode Island - RI</option>
            <option>South Carolina - SC</option>
            <option>South Dakota - SD</option>
            <option>Tennessee - TN</option>
            <option>Texas - TX</option>
            <option>Utah - UT</option>
            <option>Vermont - VT</option>
            <option>Virginia - VA</option>
            <option>Washington - WA</option>
            <option>West Virginia - WV</option>
            <option>Wisconsin - WI</option>
            <option>Wyoming - WY</option>
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
