import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BookList = ({ books, removeBook }) => {
  const handleDelete = book => {
    removeBook(book);
  };

  const bookItems = books.map(book => (
    <Book key={book.id} book={book} handleDelete={handleDelete} />
  ));

  return (
    <table className="table table-hover w-75 shadow-lg mb-4 rounded border">
      <thead>
        <tr>
          <th scope="col">Book ID</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>{bookItems}</tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps, { removeBook })(BookList);
