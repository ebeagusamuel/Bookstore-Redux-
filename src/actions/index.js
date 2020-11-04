import axios from 'axios';

import {
  CREATE_BOOK,
  REMOVE_BOOK,
  FILTER_BOOK,
  GET_BOOKS,
  REQUEST_ERROR,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_CHAPTER,
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

export const addBook = book => async dispatch => {
  try {
    const data = book;
    const response = await axios.post('https://bookstore-backend-rails.herokuapp.com/books/', data);
    const payload = response.data;
    return dispatch({
      type: CREATE_BOOK,
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
/* eslint-disable */
export const updateChapter = (book, chapter) => async dispatch => {
  try {
    const data = { current_chapter: chapter };
    const response = await axios.put(
      `https://bookstore-backend-rails.herokuapp.com/books/${book.id}`,
      data,
    );
    const payload = response.data;
    return dispatch({
      type: UPDATE_CHAPTER,
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

export const removeBook = book => async dispatch => {
  try {
    const response = await axios.delete(
      `https://bookstore-backend-rails.herokuapp.com/books/${book.id}`,
    );
    const payload = response.data;
    return dispatch({
      type: REMOVE_BOOK,
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

export const removeComment = comment => async dispatch => {
  try {
    const response = await axios.delete(
      `https://bookstore-backend-rails.herokuapp.com/comments/${comment.id}`,
    );
    const payload = response.data;
    return dispatch({
      type: REMOVE_COMMENT,
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

export const filterBooks = filter => ({
  type: FILTER_BOOK,
  payload: filter,
});
