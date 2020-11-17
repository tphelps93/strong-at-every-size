import React, { Component } from 'react';
import DataContext from '../../DataContext';
import AdminProf from '../AdminProf/AdminProf';
import UserProf from '../UserProf/UserProf';

export default class ProfilePage extends Component {
  static contextType = DataContext;
  render() {
    const { isadmin } = this.context;

    let profilePage;

    profilePage = isadmin ? <AdminProf /> : isadmin === null ? null : <UserProf />;
    return <div className='profile-page'>
        {profilePage}
    </div>;
  }
}
