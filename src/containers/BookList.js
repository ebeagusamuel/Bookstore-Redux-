import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, filterBooks } from '../actions/index';

const BookList = ({
  books, filter, removeBook, filterBooks, displayFilter,
}) => {
  const handleDelete = book => {
    removeBook(book);
  };

  const handleFilterChange = filter => {
    filterBooks(filter);
  };

  let bookItems = [...books];

  if (filter) {
    bookItems = bookItems.filter(book => book.category === filter);
  }

  bookItems = bookItems.map(book => <Book key={book.id} book={book} handleDelete={handleDelete} />);

  return (
    <section className="book-list py-4 border-bottom">
      {displayFilter && <CategoryFilter onFilterChange={handleFilterChange} />}
      {bookItems}
    </section>
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
  displayFilter: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

export default connect(mapStateToProps, { removeBook, filterBooks })(BookList);
