import React from 'react';
import store from './dummy-data';

const UsersContext = React.createContext({
  users: store.users,
  items: store.items,
  programs: store.programs,
  user_reviews: store.user_reviews,
  user_purchases: store.user_purchases,
});

export default UsersContext;
