import React, { Component } from 'react';
import DataContext from '../../DataContext';
import TokenService from '../../services/token-service';
import AdminProf from '../AdminProf/AdminProf';
import UserProf from '../UserProf/UserProf';

export default class ProfilePage extends Component {
  static contextType = DataContext;
  render() {
    const { isadmin } = this.context;

    let profilePage;
    profilePage =
      TokenService.hasAuthToken() && isadmin ? (
        <AdminProf />
      ) : TokenService.hasAuthToken() && isadmin === null ? (
        null
      ) : (
        <UserProf />
      );
    return <div className='profile-page'>{profilePage}</div>;
  }
}
