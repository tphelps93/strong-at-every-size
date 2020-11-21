import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='image-container'>
          <img
            className='trainer-image'
            src='https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/79268862_160426905277820_6486096199241490245_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=TQXEWGb0cQMAX9VRFNT&tp=19&oh=b3bad07c6de5fe592cf133f8aec0032a&oe=5FDA6049'
            alt='sarah phelps'
          ></img>
        </div>
        <div className='main-content-about'>
          <div className='about-section'>
            <h3> About Sarah </h3>
            <p>
              'Sarah is a certified personal trainer through the National
              Academy of Sports Medicine (NASM) who emphasizes a strong at every
              size approach. Through her own battles with PCOS, Sarah has
              learned that the scale is just a number and it shouldn't define
              you. You can be strong and fit regardless of your size or the
              number on the scale. She emphasizes functional movements for
              improving strength and the ability to live life more fully. While
              on her own health and fitness journey, Sarah lives by the
              philosophy that, your ideal weight is whatever weight you reach,
              when you are mindfully nourishing yourself with food and movement
              that you actually enjoy, and fully engaging in your life.
              (Jennifer Rollin).'
            </p>
          </div>
        </div>
      </div>
    );
  }
}
