import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addBook } from '../actions/index';

const BookForm = ({ addBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

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

  const categoriesOptions = categories.map(category => <option key={category}>{category}</option>);

  const { title, category } = book;
  return (
    <section>
      <h3>ADD NEW BOOK</h3>
      <form
        className="d-flex align-items-end justify-content-between shadow-top w-100 py-3 px-2 bg-light"
        onSubmit={handleSubmit}
      >
        <div className="form-group mb-0 px-2">
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
        <div className="form-group mb-0">
          <select
            className="form-control"
            id="category"
            name="category"
            onChange={handleChange}
            value={category}
            required
          >
            <option value="" disabled selected>
              Category
            </option>
            {categoriesOptions}
          </select>
        </div>
        <button type="submit" className="mb-2 btn btn-info mr-2">
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
