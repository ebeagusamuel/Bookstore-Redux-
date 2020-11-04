import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addBook } from '../actions/index';
/* eslint-disable object-curly-newline */
const BookForm = ({ addBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
    percent: '0',
  });

  const handleSubmit = e => {
    e.preventDefault();
    addBook(book);
    setBook({
      percent: '0',
      author: '',
      title: '',
      category: '',
    });
  };

  const handleChange = e => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const categoriesOptions = categories.map(category => <option key={category}>{category}</option>);

  const { title, category, author } = book;
  return (
    <section className="add-book-form pt-4">
      <h3 className="text-secondary">ADD NEW BOOK</h3>
      <form
        className="d-flex align-items-end justify-content-between shadow-top w-100 py-3 bg-light"
        onSubmit={handleSubmit}
      >
        <div className="form-group mb-0 w-50">
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Book title"
            minLength="3"
            maxLength="40"
            required
            onChange={handleChange}
            value={title}
          />
        </div>

        <div className="form-group mb-0 w-50">
          <input
            type="text"
            className="form-control"
            name="author"
            id="author"
            placeholder="Book author"
            minLength="3"
            maxLength="40"
            required
            onChange={handleChange}
            value={author}
          />
        </div>

        <div className="form-group mb-0 w-25">
          <select
            className="form-control"
            id="category"
            name="category"
            onChange={handleChange}
            value={category}
            required
          >
            <option value="" disabled>
              Category
            </option>
            {categoriesOptions}
          </select>
        </div>
        <button type="submit" className="btn btn-info px-5 text-uppercase">
          Add book
        </button>
      </form>
    </section>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, { addBook })(BookForm);
