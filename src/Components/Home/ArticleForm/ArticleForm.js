import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { postArticle } from '../../../services/api-service';

const initialState = {
  title: '',
  content: '',
  titleError: '',
  contentError: '',
};

export default class ArticleForm extends Component {
  state = { initialState };
  static contextType = DataContext;

  handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let titleError = '';
    let contentError = '';

    // Title Validation

    if (!this.state.title) {
      titleError = 'Title is Required.';
    }

    // Content Validation
    if (!this.state.content) {
      contentError = 'Content is Required';
    }

    if (titleError || contentError) {
      this.setState({ titleError, contentError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();

    const { content } = event.target;
    const { title } = event.target;
    const isValid = this.validate();
    if (isValid) {
      postArticle(title.value, content.value)
        .then(article => {
          this.context.addArticle(article);
        })
        .then(() => {
          content.value = '';
          title.value = '';
        })
        .then(() => {
          this.props.history.push('/home');
        })
        .catch(this.context.setError);
      // clear form
      this.setState(initialState);
    }
  };
  
  render() {
    return (
      <div className='article-page'>
        <form className='article-form' onSubmit={this.handleSubmit}>
          <h2> Add A New Article </h2>

          <input
            onChange={this.handleChange}
            value={this.state.title}
            name='title'
            type='text'
            className='article-title'
            placeholder='Title'
          ></input>
          <div style={{ color: 'red', fontSize: 20 }}>
            {this.state.titleError}
          </div>
          <textarea
            onChange={this.handleChange}
            value={this.state.content}
            name='content'
            className='article-content'
            placeholder='Content'
          ></textarea>
          <div style={{ color: 'red', fontSize: 20 }}>
            {this.state.contentError}
          </div>
          <button type='submit'> Submit </button>
        </form>
      </div>
    );
  }
}
