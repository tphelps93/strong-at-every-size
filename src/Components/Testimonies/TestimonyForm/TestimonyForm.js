import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { postTestimony } from '../../../services/api-service';
// CSS Imports
import './TestimonyForm.css';

const initialState = {
  photo: '',
  content: '',
  photoError: '',
  contentError: '',
};

export default class PromoForm extends Component {
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
    let photoError = '';
    let contentError = '';

    // Title Validation

    if (!this.state.photo) {
      photoError = 'Photo is Required.';
    }

    // Content Validation
    if (!this.state.content) {
      contentError = 'Content is Required';
    }

    if (photoError || contentError) {
      this.setState({ photoError, contentError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const { photo } = event.target;
    const { content } = event.target;
    const isValid = this.validate();
    if (isValid) {
      postTestimony(photo.value, content.value)
        .then(testimony => {
          this.context.addTestimony(testimony);
        })
        .then(() => {
          photo.value = '';
          content.value = '';
        })
        .then(() => {
          this.props.history.push('/testimonies');
        })
        .catch(this.context.setError);
      // clear form
      this.setState(initialState);
    }
  };
  render() {
    return (
      <div className='testimony-page'>
        <form className='testimony-form' onSubmit={this.handleSubmit}>
          <h2> Add A New Testimony </h2>

          <input
            onChange={this.handleChange}
            value={this.state.photo}
            name='photo'
            className='testimony-photo'
            placeholder='Photo URL'
          ></input>
          <div style={{ color: 'red', fontSize: 20 }}>
            {this.state.photoError}
          </div>
          <textarea
            onChange={this.handleChange}
            value={this.state.content}
            name='content'
            className='promo-content'
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
