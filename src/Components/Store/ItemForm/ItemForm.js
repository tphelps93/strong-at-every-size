import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { postItem } from '../../../services/api-service';
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

function UploadPhoto(props) {
  return (
    <section className='step1'>
      <section className='left-side'>
        <button type='button' className='widget-btn' onClick={props.openWidget}>
          Upload Image
        </button>
      </section>

      <section className='right-side'>
        {props.photo && (
          <img
            src={props.photo}
            alt={props.imageAlt}
            className='displayed-image'
          />
        )}
      </section>
    </section>
  );
}

export default class PromoForm extends Component {
  state = { initialState };
  static contextType = DataContext;

  handleFile = event => {
    this.setState({
      photo: event.target.files[0],
    });
  };

  handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
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
    // const photo = this.state.selectedFile;
    const { title } = event.target;
    const { price } = event.target;
    const { category } = event.target;
    const { description } = event.target;
    const isValid = this.validate();
    if (isValid) {
      postItem(
        this.state.photo,
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



  // openWidget = () => {
  //   window.cloudinary
  //     .createUploadWidget(
  //       {
  //         cloudName: 'strong-at-every-size',
  //         uploadPreset: 'ftjhamcq',
  //       },
  //       (error, result) => {
  //         if (result.event === 'success')
  //           this.setState({
  //             photo: result.info.secure_url,
  //             imageAlt: `An image of ${result.info.original_filename}`,
  //           });
  //       }
  //     )
  //     .open();
  // };

  render() {
    return (
      <div className='add-item-page'>
        <form className='add-item-form' onSubmit={this.handleSubmit}>
          <h2> Add A New Item </h2>
          <UploadPhoto
          onChange={this.handleChange}
          // openWidget={this.openWidget}
          photo={this.state.photo}
          imgAlt={this.state.imgAlt}
          />
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
