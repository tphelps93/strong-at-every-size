import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import DataContext from '../../DataContext';



export default class Login extends Component {
  state = { error: null };
  static contextType = DataContext;
  static defaultProps = {
    onLoginSuccess: () => {},
  };

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
        this.props.history.push('/');
      })
      .catch(res => {
        this.setState({ error: 'Incorrect username or password.' });
      });
  };
  render() {
    return (
      <div className='login-page' onSubmit={this.handleSubmitJwtAuth}>
        <form className='login-form'>
          <h2> Login </h2>

          <input name='user_name' placeholder='username'></input>
          <input name='password' type='password'></input>
          <button type='submit'> Login </button>
          <div style={{ color: 'red', fontSize: 20 }}>
            {this.state.error}
          </div>
        </form>
      </div>
    );
  }
}
