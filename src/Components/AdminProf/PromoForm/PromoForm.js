import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { postPromo } from '../../../services/api-service';

export default class PromoForm extends Component {
  static contextType = DataContext;

  handleSubmit = event => {
    event.preventDefault();
    const { title } = event.target;
    const { content } = event.target;
    postPromo(title.value, content.value)
      .then(promo => {
        this.context.addPromo(promo);
      })
      .then(() => {
        title.value = '';
        content.value = '';
      })
      .then(() => {
        this.props.history.push('/');
      })
      .catch(this.context.setError);
  };
  render() {
    return (
      <div className='promo-page'>
        <form className='promo-form' onSubmit={this.handleSubmit}>
          <h2> Add A New Promo </h2>

          <input
            name='title'
            className='promo-title'
            placeholder='Title'
          ></input>
          <textarea
            name='content'
            className='promo-content'
            placeholder='Content'
          ></textarea>
          <button type='submit'> Submit </button>
        </form>
      </div>
    );
  }
}
