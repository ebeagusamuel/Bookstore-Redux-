import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const Book = ({ book, onDelete, onNewComment, onDeleteComment }) => {
  const [comment, setComment] = useState('');
  const handleAddCommentClick = () => {
    onNewComment({ text: comment, book_id: id });
    setComment('');
  };

  const { title, author, categories, comments, id } = book;
  const categoryItems = categories.map(category => (
    <span className="pr-2" key={category.id}>
      {category.title}
    </span>
  ));
  const commentItems = comments.map(comment => (
    <article
      className="p-2 border rounded bg-light shadow-sm mb-2 d-flex align-items-center justify-content-between"
      key={comment.id}
    >
      {comment.text}
      <button className="btn text-danger" onClick={() => onDeleteComment(comment.id)}>
        X
      </button>
    </article>
  ));

  return (
    <article className="book d-flex align-items-center justify-content-between mb-3 p-3 border">
      <div className="book-details">
        <p className="category mb-0 text-muted">{categoryItems}</p>
        <h3 className="title h5 font-weight-bold mb-0">{title}</h3>
        <a href="#nav" className="author">
          {author}
        </a>

        <ul className="book-actions list-unstyled d-flex align-items-center">
          <li className="pr-2 border-right">
            <a href="#nav">Comments ({comments.length})</a>
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

        {commentItems}

        <div className="add-comment-container">
          <input
            type="text"
            minLength="2"
            maxLength="1000"
            required
            name="comment"
            id="comment"
            className="form-control mb-2"
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Comment text here..."
          />
          <button className="btn btn-info mx-auto d-block" onClick={handleAddCommentClick}>
            Add comment
          </button>
        </div>
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
    ).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onNewComment: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
};

export default Book;
