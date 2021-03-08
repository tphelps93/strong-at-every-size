import React, { Component } from 'react';
import DataContext from '../../../DataContext';
import { postReview } from '../../../services/api-service';
import TokenService from '../../../services/token-service';
const initialState = {
  content: '',
  contentError: '',
  userError: '',
};

export default class ReviewForm extends Component {
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


  // find a way to check if a user is logged in. If not and they
  // try to post a review, spit out an error.
  validate = () => {
    let userid = TokenService.jwtDecode(TokenService.getAuthToken()).payload.user_id
    const { users } = this.context;
    let contentError = '';
    let userError = '';

    // User Validation
    if (userid === null) {
      userError = 'Must be logged in.';
    }

    // Content Validation

    if (!this.state.content) {
      contentError = 'Content is Required.';
    }

    if (contentError || userError) {
      this.setState({ contentError, userError });
      return false;
    }
    return true;
  };
  handleSubmit = ev => {
    ev.preventDefault();
    const { content } = ev.target;
    const { rating } = ev.target;
    const itemId = this.props.itemId;
    const isValid = this.validate();
    if (isValid) {
      postReview(content.value, rating.value, itemId)
        .then(newReview => this.context.addReview(newReview))
        .then(() => {
          rating.value = 0;
          content.value = '';
        })
        .catch(this.context.setError);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className='review-field'>
        <form className='review-form' onSubmit={this.handleSubmit}>
          <h4> Write A Review </h4>
          <select onChange={this.handleChange} name='rating'>
            <option> 5 </option>
            <option> 4 </option>
            <option> 3 </option>
            <option> 2 </option>
            <option> 1 </option>
          </select>
          <textarea
            onChange={this.handleChange}
            value={this.state.content}
            name='content'
            className='review-field'
          ></textarea>
          <div style={{ color: 'red', fontSize: 20 }}>
            {' '}
            {this.state.contentError}{' '}
          </div>
          <div style={{ color: 'red', fontSize: 20 }}>
            {' '}
            {this.state.userError}{' '}
          </div>
          <button type='submit'> Submit Review </button>
        </form>
      </div>
    );
  }
}
