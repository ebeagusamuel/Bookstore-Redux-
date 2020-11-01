import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleDelete }) => {
  const { id, title, category } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td className="text-center">
        <button type="button" className="btn btn-danger shadow" onClick={() => handleDelete(book)}>
          X
        </button>
      </td>
    </tr>
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
