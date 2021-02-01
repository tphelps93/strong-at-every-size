import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deletePromo } from '../../services/api-service';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Promos.css';
import DataContext from '../../DataContext';

export default class Promos extends Component {
  static contextType = DataContext;
  render() {
    return <div className='promotions-page'>
        <h2> Promotions </h2>
    </div>;
  }
}
