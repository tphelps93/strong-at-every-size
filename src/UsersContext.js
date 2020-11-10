import React from 'react';
import users from './dummy-data';

const UsersContext = React.createContext({
    users: users,
});


export default UsersContext;