import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Comments from './Comments';

/* eslint-disable object-curly-newline, react/jsx-one-expression-per-line */
const Book = ({ book, onDelete, onNewComment, onDeleteComment }) => {
  const [showComments, setShowComments] = useState(false);
  const toggleComments = e => {
    e.preventDefault();
    setShowComments(showComments => !showComments);
  };

  const { title, author, categories, comments, id } = book;
  const categoryItems = categories.map(category => (
    <span className="pr-2" key={category.id}>
      {category.title}
    </span>
  ));

  return (
    <article className="book d-flex align-items-center justify-content-between mb-3 p-3 border">
      <div className="book-details">
        <p className="category mb-0 text-muted">{categoryItems}</p>
        <h3 className="title h5 font-weight-bold mb-0">{title}</h3>
        <a href="#nav" className="author">
          {author}
        </a>

        <ul className="book-actions mt-2 list-unstyled d-flex align-items-center">
          <li className="pr-2 border-right">
            <a
              href="#nav"
              onClick={toggleComments}
              className={showComments ? 'text-secondary' : undefined}
            >
              Comments ({comments ? comments.length : 0})
            </a>
          </li>
          <li className="px-2 border-right">
            <a href="#nav" onClick={() => onDelete(book)}>
              Remove
            </a>
          </li>
          <li className="px-2">
            <a href="#nav">Edit</a>
          </li>
        </ul>

        {comments && showComments && (
          <Comments
            comments={comments}
            onDeleteComment={onDeleteComment}
            onNewComment={onNewComment}
            book_id={id}
          />
        )}
      </div>
      <div className="book-status d-flex align-items-center pr-5">
        <div className="book-status-percent d-flex align-items-center border-right pr-5">
          <svg id="circle" viewBox="0 0 100 100" width="100" height="100">
            <circle
              r="30"
              cx="50%"
              cy="50%"
              stroke="#e0e0e0"
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="400, 400"
            />
            <circle
              id="success-value"
              r="30"
              cx="50%"
              cy="50%"
              stroke="#307bbe"
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="80, 80"
            />
          </svg>
          <div className="ml-3">
            <h4 className="book-status-percent-title mb-0 h2">64%</h4>
            <p className="book-status-percent-subtitle mb-0 text-secondary">Completed</p>
          </div>
        </div>

        <div className="book-status-chapter pl-5">
          <p className="book-status-chapter-subtitle text-secondary mb-0">CURRENT CHAPTER</p>
          <h4 className="book-status-chapter-title h5">Chapter 17</h4>

          <button type="button" className="btn btn-primary rounded px-4 text-uppercase mt-2">
            Update progress
          </button>
        </div>
      </div>
    </article>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, title: PropTypes.title }).isRequired,
    ).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, text: PropTypes.title }).isRequired,
    ),
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onNewComment: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
};

export default Book;
