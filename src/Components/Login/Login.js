import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import DataContext from '../../DataContext';

export default class Login extends Component {
  static contextType = DataContext;
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.context.setAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .then(() => {
        this.props.history.push('/home');
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };
  render() {
    return (
      <div className='login-page' onSubmit={this.handleSubmitJwtAuth}>
        <form className='login-form'>
          <h2> Login </h2>

          <input name='user_name' placeholder='username'></input>
          <input name='password' type='password'></input>
          <label htmlFor='remember'> Remember Me </label>
          <button type='submit'> Login </button>
        </form>
      </div>
    );
  }
}
