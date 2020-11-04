import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Comments from './Comments';

/* eslint-disable object-curly-newline, react/jsx-one-expression-per-line, camelcase */
const Book = ({ book, onDelete, onNewComment, onDeleteComment, onChapterUpdate }) => {
  const [showComments, setShowComments] = useState(false);
  const toggleComments = e => {
    e.preventDefault();
    setShowComments(showComments => !showComments);
  };

  const [chapter, setChapter] = useState(book.current_chapter);
  const handleUpdateChapter = e => {
    e.preventDefault();
    onChapterUpdate(book, chapter);
  };

  const handleClick = e => {
    e.preventDefault();
    onDelete(book);
  };

  const { title, author, category, comments, percent, id } = book;

  return (
    <article className="book d-flex align-items-center justify-content-between mb-3 p-3 border">
      <div className="book-details">
        <p className="category mb-0 text-muted">{category}</p>
        <h3 className="title h5 font-weight-bold mb-0 text-secondary">{title}</h3>
        <span className="author text-info">{author}</span>

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
          <li className="px-2">
            <a href="/" onClick={handleClick}>
              Remove
            </a>
          </li>
        </ul>

        {showComments && (
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
              strokeDasharray="0, 0"
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
              strokeDasharray={`${+percent * 1.8}, 400`}
            />
          </svg>
          <div className="ml-3">
            <h4 className="book-status-percent-title mb-0 h2">{percent}%</h4>
            <p className="book-status-percent-subtitle mb-0 text-secondary">Completed</p>
          </div>
        </div>

        <div className="book-status-chapter pl-5">
          <p className="book-status-chapter-subtitle text-secondary mb-0">CURRENT CHAPTER</p>
          <h4 className="book-status-chapter-title h5">
            <input
              className="form-control"
              type="number"
              name="current_chapter"
              id="current_chapter"
              onChange={e => setChapter(e.target.value)}
              min="0"
              max="100"
              value={chapter || '0'}
            />
          </h4>

          <button
            type="button"
            className="btn btn-info rounded px-4 py-1 text-uppercase mt-2"
            onClick={handleUpdateChapter}
          >
            Update
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
    category: PropTypes.string.isRequired,
    percent: PropTypes.string.isRequired,
    current_chapter: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, text: PropTypes.title }).isRequired,
    ),
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onNewComment: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  onChapterUpdate: PropTypes.func.isRequired,
};

export default Book;
