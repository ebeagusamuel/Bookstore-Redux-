import React from 'react';

import userIcon from '../assets/user.png';

import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

function App() {
  return (
    <div className="App">
      <div className="Bookstore">
        <nav className="nav">
          <ul className="list-unstyled mb-0">
            <li>
              <a href="/" className="nav-brand">
                Bookstore CMS
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-uppercase">
                Books
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-uppercase">
                Categories
              </a>
            </li>
          </ul>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="/" className="user-profile">
                <img src={userIcon} alt="user icon" width="25" height="25" className="img-fluid" />
              </a>
            </li>
          </ul>
        </nav>
        <BookList />
        <BookForm />
      </div>
    </div>
  );
}

export default App;
