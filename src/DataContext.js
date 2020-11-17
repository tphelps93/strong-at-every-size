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
  setError: () => {},
});

export default DataContext;
