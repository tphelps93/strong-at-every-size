import React, { Component } from 'react';
import DataContext from '../../DataContext';
import { Link } from 'react-router-dom';
import { deletePromo, deleteArticle } from '../../services/api-service';

export default class Home extends Component {
  static contextType = DataContext;

  handleClickDeletePromo = promo_id => {
    deletePromo(promo_id)
      .then(promo => {
        this.context.deletePromo(promo_id);
      })
      .catch(this.context.setError);
  };

  handleClickDeleteArticle = news_id => {
    deleteArticle(news_id)
      .then(article => {
        this.context.deleteArticle(news_id);
      })
      .catch(this.context.setError);
  };

  render() {
    const { promos, articles, isadmin } = this.context;

    const updateHomePage = isadmin ? (
      <div className='edit-buttons'>
        <Link to='/add-promo'>
          <button className='add-promo'> Add Promo </button>
        </Link>

        <Link to='/add-article'>
          <button className='add-article'> Add Article </button>
        </Link>
      </div>
    ) : (
      ''
    );

    const deletePromoButton = promo_id => {
      return isadmin ? (
        <div className='delete-promo-container'>
          <button
            name='delete-button'
            className='delete-promo-button'
            onClick={() => this.handleClickDeletePromo(promo_id)}
          >
            {' '}
            Delete{' '}
          </button>
        </div>
      ) : (
        ''
      );
    };

    const deleteArticleButton = news_id => {
      return isadmin ? (
        <div className='delete-promo-container'>
          <button
            name='delete-button'
            className='delete-promo-button'
            onClick={() => this.handleClickDeleteArticle(news_id)}
          >
            {' '}
            Delete{' '}
          </button>
        </div>
      ) : (
        ''
      );
    };
    const promosList = promos.map(promo => {
      return (
        <div key={promo.promo_id} className='promos'>
          <h2> {promo.title} </h2>
          <p> {promo.content} </p>
          {deletePromoButton(promo.promo_id)}
        </div>
      );
    });

    const articlesList = articles.map(article => {
      return (
        <div key={article.news_id} className='updates'>
          <h2> {article.title} </h2>
          <p> {article.content} </p>
          {deleteArticleButton(article.news_id)}
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
          <h3> Promos </h3>
          {promosList}
          <h3> Updates </h3>
          {articlesList}
        </div>
        {updateHomePage}
      </div>
    );
  }
}
