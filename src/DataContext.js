import React from 'react';

const DataContext = React.createContext({
  users: [],
  items: [],
  programs: [],
  purchases: [],
  reviews: [],
  promos: [],
  articles: [],
  testimonies: [],
  authToken: null,
  isadmin: null,
  addUser: () => {},
  addReview: () => {},
  addPromo: () => {},
  addArticle: () => {},
  addTestimony: () => {},
  addItem: () => {},
  deleteItem: () => {},
  deletePromo: () => {},
  deleteArticle: () => {},
  editProfile: () => {},
  setError: () => {},
  setAuthToken: () => {},
  clearAuthToken: () => {},
});

export default DataContext;