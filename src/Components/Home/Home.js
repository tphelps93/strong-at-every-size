import React, { Component } from 'react';
import DataContext from '../../DataContext';
import { Link } from 'react-router-dom';
import { deletePromo, deleteArticle } from '../../services/api-service';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import sarah from '../../Images/sarah.jpg';

export default class Home extends Component {
  static contextType = DataContext;

  handleClickDeletePromo = promo_id => {
    deletePromo(promo_id)
      .then(promo => {
        this.context.deletePromo(promo_id);
      })
      .catch(this.context.setError);
  };

  handleClickDeleteArticle = article_id => {
    deleteArticle(article_id)
      .then(article => {
        this.context.deleteArticle(article_id);
      })
      .catch(this.context.setError);
  };

  render() {
    const { promos, articles, isadmin } = this.context;

    const updateHomePage = isadmin ? (
      <div key={promos.promo_id} className='edit-buttons'>
        <Link to='/add-promo'>
          <button className='add-buttons'> Add Promo </button>
        </Link>

        <Link to='/add-article'>
          <button className='add-buttons'> Add Article </button>
        </Link>
      </div>
    ) : (
      ''
    );

    const deletePromoButton = promo_id => {
      return isadmin ? (
        <div key={promos.promo_id} className='delete-promo-container'>
          <button
            name='delete-button'
            className='delete-button'
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

    const deleteArticleButton = article_id => {
      return isadmin ? (
        <div className='delete-article-container'>
          <button
            name='delete-button'
            className='delete-button'
            onClick={() => this.handleClickDeleteArticle(article_id)}
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
          <h4> {promo.title} </h4>
          <p> {promo.content} </p>
          {deletePromoButton(promo.promo_id)}
        </div>
      );
    });

    const articlesList = articles.map(article => {
      return (
        <div key={article.article_id} className='updates'>
          <h4> {article.title} </h4>
          <p> {article.content} </p>
          {deleteArticleButton(article.article_id)}
        </div>
      );
    });
    return (
      <div className='home'>
        <div className='slideshow'></div>
        <div className='main-content-home'>
          <div className='nav-buttons'>
            <div className='promos'>
              <h3>
                {' '}
                <span>
                  <FontAwesomeIcon
                    style={{ fontSize: '35px' }}
                    icon='bullhorn'
                  />
                </span>{' '}
                Promotions{' '}
              </h3>
            </div>
            <div className='updates'>
              <h3>
                {' '}
                <span>
                  <FontAwesomeIcon
                    style={{ fontSize: '35px' }}
                    icon='newspaper'
                  />
                </span>
                News{' '}
              </h3>
            </div>
          </div>{' '}
          <div className='about'>
            <h2> About Me </h2>
            <div className='about-content'>
            <img src={sarah} alt='sarah phelps'></img>
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
        {updateHomePage}
      </div>
    );
  }
}
