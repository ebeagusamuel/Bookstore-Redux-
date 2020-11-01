import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addBook } from '../actions/index';

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
      id: 5,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id, title, category } = this.state;
    const { addBook } = this.props;
    addBook({ id, title, category });
    this.setState({
      id: id + 1,
      title: '',
      category: '',
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const categoriesOptions = categories.map(category => (
      <option key={category}>{category}</option>
    ));
    const { title, category } = this.state;
    return (
      <form
        className="d-flex align-items-end justify-content-between shadow-top w-100 py-3 px-2 bg-light"
        onSubmit={this.handleSubmit}
      >
        <div className="form-group mb-0 px-2">
          <label htmlFor="text">
            Book
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder="Please enter the book title"
              minLength="3"
              maxLength="40"
              required
              onChange={this.handleChange}
              value={title}
            />
          </label>
        </div>
        <div className="form-group mb-0">
          <label htmlFor="category">
            Please select a category
            <select
              className="form-control"
              id="category"
              name="category"
              onChange={this.handleChange}
              value={category || categories[0]}
            >
              {categoriesOptions}
            </select>
          </label>
        </div>
        <button type="submit" className="mb-2 btn btn-info mr-2">
          Add book
        </button>
      </form>
    );
  }
}

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, { addBook })(BookForm);
