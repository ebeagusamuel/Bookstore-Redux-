import {
  CREATE_BOOK,
  REMOVE_BOOK,
  GET_BOOKS,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_BOOK,
} from '../actions/types';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return [...action.payload];
    case CREATE_BOOK:
      return [...state, action.payload];
    case UPDATE_BOOK:
      return [...state].map(book => {
        if (book.id === action.payload.id) {
          return action.payload;
        }
        return book;
      });
    case REMOVE_BOOK:
      return [...state].filter(book => book.id !== action.payload.id);
    case ADD_COMMENT:
      return [...state].map(book => {
        const newBook = book;
        if (book.id === action.payload.book_id) {
          newBook.comments = [...book.comments, action.payload];
          return newBook;
        }
        return book;
      });
    case REMOVE_COMMENT:
      return [...state].map(book => {
        const newBook = book;

        if (book.id === action.payload.book_id) {
          newBook.comments = book.comments.filter(comment => comment.id !== action.payload.id);
          return newBook;
        }
        return book;
      });
    default:
      return state;
  }
};

export default bookReducer;
