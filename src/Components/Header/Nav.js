import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      this.state.menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      navList.classList.add('visible');
      this.state.menuOpen = false;
    }
  };
  render() {
    return (
      <div className='nav'>
        <div className='burger-container' onClick={this.handleClick}>
          <div className='menu-btn-burger'></div>
        </div>
        <ul className='nav-list visible'>
          <Link style={{textDecoration:'none'}} to='/about'>
            <li onClick={!this.state.menuOpen} > About </li>
          </Link>

          <Link style={{textDecoration:'none'}} to='/contact'>
            <li onClick={!this.state.menuOpen}> Contact </li>
          </Link>

          <Link style={{textDecoration:'none'}} to='/testimonies'>
            <li onClick={!this.state.menuOpen}> Testimonies </li>
          </Link>

          <Link style={{textDecoration:'none'}} to='/store'>
            <li onClick={!this.state.menuOpen}> Store </li>
          </Link>
        </ul>
      </div>
    );
  }
}
