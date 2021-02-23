import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { postItem } from '../../../services/api-service';
import config from '../../../config';
import TokenService from '../../../services/token-service';

// CSS Imports
import './ItemForm.css';

const initialState = {
  photo: null,
  imageAlt: null,
  error: null,
  title: '',
  price: '',
  description: '',
  photoError: '',
  titleError: '',
  priceError: '',
  descError: '',
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

  handleFile = e => {
    const photo = e.target.files[0];
    const formData = new FormData();
    formData.append('photo', photo);
    return fetch(`${config.API_BASE_URL}/api/upload`, {
      method: 'POST',
      body: formData,
    }).then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        photo: res.uploadedImage
      })
    })
  };

  validate = () => {
    // let photoError = '';
    let titleError = '';
    let priceError = '';
    let descError = '';

    // Photo Validation

    // if (!this.state.photo) {
    // photoError = 'Photo is Required.';
    // }

    // Title Validation

    if (!this.state.title) {
      titleError = 'Title is Required.';
    }

    // Price Validation

    if (!this.state.price) {
      priceError = 'Price is Required.';
    }

    // Description Validation
    if (!this.state.description) {
      descError = 'Description is Required';
    }

    if (/* photoError ||*/ titleError || priceError || descError) {
      this.setState({ /* photoError,*/ titleError, priceError, descError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title } = event.target;
    const { price } = event.target;
    const { category } = event.target;
    const { description } = event.target;
    const isValid = this.validate();
    if (isValid) {
      postItem(
        this.state.photo.name,
        title.value,
        price.value,
        category.value,
        description.value
      )
        .then(item => {
          this.context.addItem(item);
        })
        .then(() => {
          title.value = '';
          price.value = '';
          category.value = '';
          description.value = '';
        })
        .then(() => {
          this.props.history.push('/store');
        })
        .catch(this.context.setError);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    console.log(this.state.photo);
    return (
      <div className='add-item-page'>
        <form className='add-item-form' onSubmit={this.handleSubmit}>
          <h2> Add A New Item </h2>
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
            placeholder='Item Title'
          ></input>
          <div style={{ color: 'red', fontSize: 20 }}>
            {this.state.titleError}
          </div>
          <input
            onChange={this.handleChange}
            value={this.state.price}
            name='price'
            placeholder='Price'
          ></input>
          <div style={{ color: 'red', fontSize: 20 }}>
            {this.state.priceError}
          </div>

          <select name='category'>
            <option> Apparel </option>
            <option> Equipment </option>
            <option> Programs </option>
          </select>

          <textarea
            onChange={this.handleChange}
            value={this.state.description}
            name='description'
            placeholder='Item Description'
          ></textarea>
          <div style={{ color: 'red', fontSize: 20 }}>
            {this.state.descError}
          </div>
          <button type='submit'> Submit </button>
        </form>
      </div>
    );
  }
}
