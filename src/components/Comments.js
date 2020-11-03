import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable implicit-arrow-linebreak, camelcase, object-curly-newline */
const Comments = ({ comments, onDeleteComment, onNewComment, book_id }) => {
  const [text, setText] = useState('');
  const handleAddComment = () => {
    onNewComment({ text, book_id });
    setText('');
  };

  const commentItems = comments.map(comment => (
    <article
      className="comment px-2 py-0 border rounded bg-light shadow-sm mb-2 d-flex align-items-center justify-content-between"
      key={comment.id}
    >
      {comment.text}
      <button type="button" className="btn text-danger" onClick={() => onDeleteComment(comment)}>
        X
      </button>
    </article>
  ));

  return (
    <>
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
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Comment text here..."
        />
        <button type="button" className="btn btn-info mx-auto d-block" onClick={handleAddComment}>
          Add comment
        </button>
      </div>
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, text: PropTypes.title }).isRequired,
  ).isRequired,
  book_id: PropTypes.number.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  onNewComment: PropTypes.func.isRequired,
};
export default Comments;
