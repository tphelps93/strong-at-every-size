import React, { Component } from 'react';
import DataContext from '../../DataContext';

export default class Home extends Component {
  static contextType = DataContext;
  render() {
    const { promos, articles } = this.context;

    const promosList = promos.map(promo => {
      return (
        <div key={promo.promo_id} className='promos'>
          <h3> Promos </h3>
          <p> {promo.content} </p>
        </div>
      );
    });

    const articlesList = articles.map(article => {
      return (
        <div key={article.news_id} className='updates'>
          <h3> Updates </h3>
          <p> {article.content} </p>
        </div>
      );
    });
    return (
      <div className='home'>
        <div className='slideshow'>
          <img
            className='slideshow-1'
            alt='man doing a deadlift'
            src='https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
          ></img>
        </div>
        <div className='main-content-home'>
          {promosList}
          {articlesList}
        </div>
      </div>
    );
  }
}
