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
  error: null,
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
  setAdmin: () => {},
  setUser: () => {},
  setError: () => {},
  setAuthToken: () => {},
  clearAuthToken: () => {},
});

export default DataContext;
