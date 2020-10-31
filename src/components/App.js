import React from 'react';

import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

function App() {
  return (
    <div className="my-4 d-flex flex-column align-items-center justify-content-center">
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;