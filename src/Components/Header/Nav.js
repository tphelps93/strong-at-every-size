import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// CSS Imports 
import './Nav.css';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleClick = () => {
    const menuBtn = document.querySelector('.burger-container');
    const navList = document.querySelector('.nav-list');
    if (!this.state.menuOpen) {
      menuBtn.classList.add('open');
      navList.classList.remove('visible');
      this.setState({
        menuOpen: true,
      })
    } else {
      menuBtn.classList.remove('open');
      navList.classList.add('visible');
      this.setState({
        menuOpen: false,
      })
    }
  };
  render() {
    return (
      <div className='nav'>
        <div className='burger-container' onClick={this.handleClick}>
          <div className='menu-btn-burger'></div>
        </div>
        <div className='nav-list visible'>
          <Link style={{textDecoration:'none'}} to='/about'>
            <p onClick={!this.state.menuOpen} > About </p>
          </Link>

          <Link style={{textDecoration:'none'}} to='/contact'>
            <p onClick={!this.state.menuOpen}> Contact </p>
          </Link>

          <Link style={{textDecoration:'none'}} to='/testimonies'>
            <p onClick={!this.state.menuOpen}> Testimonies </p>
          </Link>

          <Link style={{textDecoration:'none'}} to='/store'>
            <p onClick={!this.state.menuOpen}> Store </p>
          </Link>
        </div>
      </div>
    );
  }
}
