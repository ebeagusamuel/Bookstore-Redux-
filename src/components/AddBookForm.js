import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBookForm = ({ addBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoriesOptions = categories.map(category => <option key={category}>{category}</option>);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [id, setId] = useState(50);

  const handleSubmit = e => {
    e.preventDefault();
    setId(id + 1);
    addBook({ id, title, category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
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
      <div className="form-group">
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
      <button type="submit">Add book</button>
    </form>
  );
};

AddBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddBookForm;
