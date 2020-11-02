import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleDelete }) => {
  const { title, category } = book;
  return (
    <article className="book">
      <div className="book-details">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>
        <p className="author">Suzanne Collins</p>

        <ul className="book-actions">
          <li>
            <a href="/">Comments</a>
          </li>
          <li>
            <a href="/">Remove</a>
          </li>
          <li>
            <a href="/" onClick={() => handleDelete(book)}>
              Edit
            </a>
          </li>
        </ul>
      </div>
      <div className="book-status">
        <div className="book-status-percent">
          <div className="book-status-percent-circle" />
          <h4 className="book-status-percent-title">64%</h4>
          <p className="book-status-percent-subtitle">Completed</p>
        </div>

        <div className="book-status-chapter">
          <p className="book-status-chapter-subtitle">CURRENT CHAPTER</p>
          <h4 className="book-status-chapter-title">Chapter 17</h4>

          <button type="button">Update progress</button>
        </div>
      </div>
    </article>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Book;
