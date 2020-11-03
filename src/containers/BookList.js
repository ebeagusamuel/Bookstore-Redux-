import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* eslint-disable */
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, filterBooks, getBooks, addComment, removeComment } from '../actions/index';
const BookList = ({
  books,
  filter,
  removeBook,
  filterBooks,
  displayFilter,
  getBooks,
  addComment,
}) => {
  useEffect(() => {
    getBooks();
  }, []);

  let bookItems = [...books];

  if (filter) {
    bookItems = bookItems.filter(book =>
      book.catagories.some(category => category.title === filter),
    );
  }

  bookItems = bookItems.map(book => (
    <Book
      key={book.id}
      book={book}
      onDelete={book => removeBook(book)}
      onNewComment={comment => addComment(comment)}
      onDeleteComment={comment => removeComment(comment)}
    />
  ));

  return (
    <section className="book-list py-4 border-bottom">
      {displayFilter && <CategoryFilter onFilterChange={filter => filterBooks(filter)} />}
      {bookItems}
    </section>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number, title: PropTypes.title }).isRequired,
      ).isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  removeBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
  displayFilter: PropTypes.bool.isRequired,
  addComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

export default connect(mapStateToProps, { removeBook, filterBooks, getBooks, addComment })(
  BookList,
);
