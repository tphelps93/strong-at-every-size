import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { postArticle, uploadPhoto } from '../../../services/api-service';
// CSS Imports
import './ArticleForm.css';

const initialState = {
  title: '',
  photo: null,
  fileUrl: '',
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

  handleFile = e => {
    const photo = e.target.files[0];
    const formData = new FormData();
    formData.append('photo', photo);
    uploadPhoto(formData).then(res => {
      this.setState({
        photo: res.Key,
        fileUrl: URL.createObjectURL(photo),
      });
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
    const photo = this.state.photo;
    const { content } = event.target;
    const { title } = event.target;
    const isValid = this.validate();
    if (isValid) {
      postArticle(photo, title.value, content.value)
        .then(article => {
          this.context.addArticle(article);
        })
        .then(() => {
          content.value = '';
          title.value = '';
        })
        .then(() => {
          this.props.history.push('/');
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

          {this.state.fileUrl ? (
            <img src={`${this.state.fileUrl}`} alt='uploaded-file'></img>
          ) : (
            ''
          )}
          
          <input
            onChange={this.handleFile}
            name='photo'
            type='file'
            accept='image/jpg,image/jpeg'
          ></input>
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
