import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addBook } from '../actions/index';

const BookForm = ({ addBook }) => {
  const [book, setBook] = useState({
    title: '',
    category: '',
    id: 5,
  });

  const handleSubmit = e => {
    e.preventDefault();
    addBook(book);
    setBook({
      id: book.id + 1,
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

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoriesOptions = categories.map(category => <option key={category}>{category}</option>);
  const { title, category } = book;
  return (
    <form
      className="d-flex align-items-end justify-content-between shadow-top w-100 py-3 px-2 bg-light"
      onSubmit={handleSubmit}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, { addBook })(BookForm);
