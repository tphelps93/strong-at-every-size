import React from 'react';

const UsersContext = React.createContext({
  users: [],
  items: [],
  programs: [],
  purchases: [],
  reviews: [],
  promos: [],
  articles: [],
  testimonies: [],
  addUser: () => {},
  addReview: () => {},
  setError: () => {},
});

export default UsersContext;
