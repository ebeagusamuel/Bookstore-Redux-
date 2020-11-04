import axios from 'axios';
/* eslint-disable */

import {
  CREATE_BOOK,
  REMOVE_BOOK,
  FILTER_BOOK,
  GET_BOOKS,
  REQUEST_ERROR,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_BOOK,
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

export const updateBook = ({ id, chapter, percentage }) => async dispatch => {
  try {
    const data = { current_chapter: chapter, percent: percentage };
    const response = await axios.put(
      `https://bookstore-backend-rails.herokuapp.com/books/${id}`,
      data,
    );
    const payload = response.data;
    return dispatch({
      type: UPDATE_BOOK,
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
