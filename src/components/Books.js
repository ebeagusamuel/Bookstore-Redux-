import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const Books = ({ books }) => {
  const bookItems = books.map(book => <Book key={book.id} book={book} />);

  return (
    <table className="table table-hover w-75 shadow-lg my-4 rounded border">
      <thead>
        <tr>
          <th scope="col">Book ID</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>{bookItems}</tbody>
    </table>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};
export default Books;
