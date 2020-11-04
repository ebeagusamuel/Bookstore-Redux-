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

  const [percentage, setPercentage] = useState(book.percent);
  const [chapter, setChapter] = useState(book.current_chapter);
  const handleUpdateBook = e => {
    e.preventDefault();
    onChapterUpdate({ id: book.id, chapter, percentage });
  };

  const handleClick = e => {
    e.preventDefault();
    onDelete(book);
  };

  const { title, author, category, comments, id } = book;

  return (
    <article className="book d-flex flex-column flex-lg-row align-items-center justify-content-between mb-3 p-3 border">
      <div className="book-details p-3 p-lg-0 w-75 mb-2 mb-lg-0">
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
      <div>
        <div className="book-status d-flex flex-column flex-md-row align-items-center pr-md-5">
          <div className="book-status-percent d-flex align-items-center pr-md-3">
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
                strokeDasharray={`${+percentage * 1.8}, 400`}
              />
            </svg>
            <div className="ml-3">
              <h4 className="book-status-percent-title mb-0 h2">{percentage}%</h4>
              <p className="book-status-percent-subtitle mb-0 text-secondary">Completed</p>
              <div className="form-group">
                <input
                  type="range"
                  className="form-control-range"
                  name="percent"
                  id="percent"
                  min="0"
                  max="100"
                  required
                  onChange={e => setPercentage(e.target.value)}
                  value={percentage}
                />
              </div>
            </div>
          </div>

          <div className="book-status-chapter pl-md-3">
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
          </div>
        </div>
        <button
          type="button"
          className="btn btn-info rounded px-4 py-1 text-uppercase mt-2 d-block mx-auto"
          onClick={handleUpdateBook}
        >
          Update status
        </button>
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
