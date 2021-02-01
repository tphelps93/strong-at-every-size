import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteArticle } from '../../services/api-service';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './News.css';
import DataContext from '../../DataContext';

export default class News extends Component {
  static contextType = DataContext;

  handleClickDeleteArticle = article_id => {
    deleteArticle(article_id)
      .then(article => {
        this.context.deleteArticle(article_id);
      })
      .catch(this.context.setError);
  };

  render() {
    const { articles, isadmin } = this.context;

    const addArticle = isadmin ? (
      <div key={articles.article_id} className='add-article-btn'>
        <Link to='/add-article'>
          <button className='add-article-button'>
            {' '}
            <FontAwesomeIcon style={{ fontSize: '15px' }} icon='plus' />
          </button>
        </Link>
      </div>
    ) : (
      ''
    );

    const deleteArticleButton = article_id => {
      return isadmin ? (
        <div className='delete-article-container'>
          <button
            name='delete-button'
            className='delete-article-button'
            onClick={() => this.handleClickDeleteArticle(article_id)}
          >
            <FontAwesomeIcon style={{ fontSize: '15px' }} icon='trash-alt' />
          </button>
        </div>
      ) : (
        ''
      );
    };

    const articlesList = articles.map(article => {
      return (
        <div key={article.article_id} className='news-listing'>
          <h4> {article.title} </h4>
          <p> {article.content} </p>
          <p className='date-text'>
            {' '}
            {deleteArticleButton(article.article_id)} Posted:{' '}
            {article.date_created.split('T')[0]}{' '}
          </p>
        </div>
      );
    });
    return (
      <div className='news-page'>
        <h2> News </h2>
        {articlesList}
        {addArticle}
      </div>
    );
  }
}
