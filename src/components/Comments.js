import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

/* eslint-disable camelcase, object-curly-newline */
const Comments = ({ comments, onDeleteComment, onNewComment, book_id }) => {
  const [text, setText] = useState('');
  const handleAddComment = () => {
    onNewComment({ text, book_id });
    setText('');
  };

  const commentItems = comments.map(comment => {
    const createdAt = moment(new Date(comment.created_at), 'YYYYMMDD').fromNow();

    return (
      <article
        className="comment px-2 py-0 border rounded bg-light shadow-sm mb-2"
        key={comment.id}
      >
        <div className="d-flex align-items-center justify-content-between">
          {comment.text}
          <button
            type="button"
            className="btn text-danger"
            onClick={() => onDeleteComment(comment)}
          >
            X
          </button>
        </div>
        <p className="text-right text-muted mr-3 font-italic h6">{createdAt}</p>
      </article>
    );
  });

  return (
    <div>
      {commentItems}
      <div className="add-comment-container">
        <div className="form-group">
          <input
            type="text"
            minLength="2"
            maxLength="1000"
            required
            name="comment"
            id="comment"
            className="form-control mb-2"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Comment text here..."
          />
        </div>
        <button type="button" className="btn btn-info mx-auto d-block" onClick={handleAddComment}>
          Add comment
        </button>
      </div>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, text: PropTypes.title, created_at: PropTypes.string })
      .isRequired,
  ).isRequired,
  book_id: PropTypes.number.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  onNewComment: PropTypes.func.isRequired,
};
export default Comments;
