import { CREATE_BOOK, REMOVE_BOOK, FILTER_BOOK } from './types';

export const addBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});

export const filterBooks = filter => ({
  type: FILTER_BOOK,
  payload: filter,
});
