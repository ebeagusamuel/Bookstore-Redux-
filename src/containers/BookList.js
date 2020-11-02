import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, filterBooks } from '../actions/index';

const BookList = ({
  books, filter, removeBook, filterBooks,
}) => {
  const handleDelete = book => {
    removeBook(book);
  };

  const handleFilterChange = filter => {
    console.log(filter);
    filterBooks(filter);
  };

  let bookItems;

  if (filter !== 'false') {
    const booksToFilter = [...books];
    const filteredBooks = booksToFilter.filter(book => book.category === filter);
    bookItems = filteredBooks.map(book => (
      <Book key={book.id} book={book} handleDelete={handleDelete} />
    ));
  } else {
    bookItems = books.map(book => (
      <Book key={book.id} book={book} handleDelete={handleDelete} />
    ));
  }

  // const bookItems = books.map(book => (
  //   <Book key={book.id} book={book} handleDelete={handleDelete} />
  // ));

  return (
    <>
      <CategoryFilter onFilterChange={handleFilterChange} />
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
    </>
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
  filter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  removeBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

export default connect(mapStateToProps, { removeBook, filterBooks })(BookList);
