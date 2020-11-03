/* eslint-disable */
import { CREATE_BOOK, REMOVE_BOOK, GET_BOOKS, ADD_COMMENT } from '../actions/types';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return [...action.payload];
    case ADD_COMMENT:
      return [...state].map(book => {
        if (book.id === action.payload.book_id) {
          book.comments = [...book.comments, action.payload];
        }
        return book;
      });
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state].filter(book => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
