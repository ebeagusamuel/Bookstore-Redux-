import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* eslint-disable */
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import {
  removeBook,
  filterBooks,
  getBooks,
  addComment,
  removeComment,
  updateBook,
} from '../actions/index';
const BookList = ({
  books,
  filter,
  removeBook,
  filterBooks,
  displayFilter,
  getBooks,
  addComment,
  removeComment,
  updateBook,
}) => {
  useEffect(() => {
    getBooks();
  }, []);

  let bookItems = [...books];

  if (filter) {
    bookItems = bookItems.filter(book => book.category === filter);
  }

  bookItems = bookItems
    .sort((bookA, bookB) => new Date(bookB.created_at) - new Date(bookA.created_at))
    .map(book => (
      <Book
        key={book.id}
        book={book}
        onDelete={book => removeBook(book)}
        onNewComment={comment => addComment(comment)}
        onDeleteComment={comment => removeComment(comment)}
        onChapterUpdate={bookUpdates => updateBook(bookUpdates)}
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
      category: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  removeBook: PropTypes.func.isRequired,
  getBooks: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
  displayFilter: PropTypes.bool.isRequired,
  addComment: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

export default connect(mapStateToProps, {
  removeBook,
  filterBooks,
  getBooks,
  addComment,
  removeComment,
  updateBook,
})(BookList);
