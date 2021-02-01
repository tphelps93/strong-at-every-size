import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteArticle } from '../../services/api-service';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './News.css';
import DataContext from '../../DataContext';

export default class News extends Component {
  static contextType = DataContext;
  render() {
    return <div className='news-page'>
        <h2> News </h2>
    </div>;
  }
}