import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { postItem } from '../../../services/api-service';

export default class PromoForm extends Component {
  static contextType = DataContext;

  handleSubmit = event => {
    event.preventDefault();
    const { photo } = event.target;
    const { title } = event.target;
    const { price } = event.target;
    const { category } = event.target;
    const { description } = event.target;
    postItem(
      photo.value,
      title.value,
      price.value,
      category.value,
      description.value
    )
      .then(item => {
        this.context.addItem(item);
      })
      .then(() => {
        photo.value = '';
        title.value = '';
        price.value = '';
        category.value = '';
        description.value = '';
      })
      .then(() => {
        this.props.history.push('/store');
      })
      .catch(this.context.setError);
  };
  render() {
    return (
      <div className='add-item-page'>
        <form className='add-item-form' onSubmit={this.handleSubmit}>
          <h2> Add A New Item </h2>
          <input name='photo' placeholder='Photo URL'></input>
          <input name='title' placeholder='Item Title'></input>
          <input name='price' placeholder='Price'></input>

          <select name='category'>
            <option> Apparel </option>
            <option> Equipment </option>
            <option> Programs </option>
          </select>

          <textarea
            name='description'
            placeholder='Item Description'
          ></textarea>
          <button type='submit'> Submit </button>
        </form>
      </div>
    );
  }
}
