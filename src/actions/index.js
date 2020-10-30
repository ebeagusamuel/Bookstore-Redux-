import { CREATE_BOOK, REMOVE_BOOK } from './types';

export const addBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});
