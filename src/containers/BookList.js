import { connect } from 'react-redux';

import Books from '../components/Books';

const mapStateToProps = state => ({
  books: state.library.books,
  user: state.userProfile.name,
});

const BookList = connect(mapStateToProps, null)(Books);

export default BookList;
