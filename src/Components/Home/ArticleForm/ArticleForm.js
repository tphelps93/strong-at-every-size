import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { postArticle } from '../../../services/api-service';

export default class ArticleForm extends Component {
  static contextType = DataContext;

  handleSubmit = event => {
    event.preventDefault();

    const { content } = event.target;
    const { title } = event.target;

    postArticle(title.value, content.value)
      .then(article => {
        this.context.addArticle(article);
      })
      .then(() => {
        content.value = '';
        title.value = '';
      })
      .then(() => {
        this.props.history.push('/home')
      })
      .catch(this.context.setError);
  };
  render() {
    return (
      <div className='article-page'>
        <form className='article-form' onSubmit={this.handleSubmit}>
          <h2> Add A New Article </h2>

          <input
            name='title'
            type='text'
            className='article-title'
            placeholder='Title'
          ></input>
          <textarea
            name='content'
            className='article-content'
            placeholder='Content'
          ></textarea>
          <button type='submit'> Submit </button>
        </form>
      </div>
    );
  }
}
