// Dependency Imports
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// CSS Imports
import './Construction.css';


export default class Construction extends Component {
  render() {
    return (
      <div className='construction'>
        <h1>
         <span> <FontAwesomeIcon style={{ fontSize: '70px', color: '#2b7a78'}} icon='hard-hat' /> </span>
          Under Construction. We'll be right back!
        </h1>
      </div>
    );
  }
}
