import axios from 'axios';
/* eslint-disable */
import {
  CREATE_BOOK,
  REMOVE_BOOK,
  FILTER_BOOK,
  GET_BOOKS,
  REQUEST_ERROR,
  ADD_COMMENT,
} from './types';

export const getBooks = () => async dispatch => {
  try {
    const response = await axios.get('https://bookstore-backend-rails.herokuapp.com/books/');
    const books = response.data;
    return dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  } catch (error) {
    console.log('error :>> ', error.message);
    return dispatch({
      type: REQUEST_ERROR,
      payload: error,
    });
  }
};

export const addComment = comment => async dispatch => {
  try {
    const data = comment;
    const response = await axios.post(
      'https://bookstore-backend-rails.herokuapp.com/comments/',
      data,
    );
    const payload = response.data;
    return dispatch({
      type: ADD_COMMENT,
      payload,
    });
  } catch (error) {
    console.log('error :>> ', error.message);
    return dispatch({
      type: REQUEST_ERROR,
      payload: error,
    });
  }
};

export const removeComment = book => ({
  type: REMOVE_BOOK,
  payload: book,
});

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
