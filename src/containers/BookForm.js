import React from 'react';
import { connect } from 'react-redux';
import AddBookForm from '../components/AddBookForm';
import { addBook } from '../actions';

const BookForm = connect(null, { addBook })(AddBookForm);

export default BookForm;
