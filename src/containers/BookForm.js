import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addBook } from '../actions/index';

const BookForm = ({ addBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoriesOptions = categories.map(category => <option key={category}>{category}</option>);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [id, setId] = useState(5);

  const handleSubmit = e => {
    e.preventDefault();
    setId(id + 1);
    addBook({ id, title, category });
    setTitle('');
    setCategory('');
  };

  return (
    <form
      className="d-flex align-items-end justify-content-between shadow-top w-100 py-3 px-2 bg-light"
      onSubmit={handleSubmit}
    >
      <div className="form-group mb-0">
        <label htmlFor="text">
          Book
          <input
            type="text"
            className="form-control"
            name="text"
            id="text"
            placeholder="Please enter the book title"
            onChange={e => setTitle(e.target.value)}
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
            onChange={e => setCategory(e.target.value)}
            value={category}
          >
            {categoriesOptions}
          </select>
        </label>
      </div>
      <button type="submit" className="mb-2 btn btn-info">
        Add book
      </button>
    </form>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, { addBook })(BookForm);
