import React from 'react';
import PropTypes from 'prop-types';

const AddBookForm = ({ addBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoriesOptions = categories.map(category => <option key={category}>{category}</option>);

  return (
    <form onSubmit={addBook()}>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">
          Book
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">
          categories
          <select className="form-control" id="exampleFormControlSelect1">
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
