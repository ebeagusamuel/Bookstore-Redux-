import { connect } from 'react-redux';

import Books from '../components/Books';

const mapStateToProps = state => ({
  books: state.books,
});

const BookList = connect(mapStateToProps, null)(Books);

export default BookList;
