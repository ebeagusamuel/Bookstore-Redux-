import React from 'react';

import userIcon from '../assets/user.svg';

import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

function App() {
  return (
    <div className="Bookstore mx-auto rounded my-5 shadow-lg">
      <nav className="nav d-flex align-items-center justify-content-between py-3 border-bottom">
        <ul className="list-unstyled mb-0 d-flex align-items-center">
          <li>
            <a href="/" className="nav-brand mr-3">
              Bookstore CMS
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-uppercase text-dark">
              Books
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-uppercase text-muted">
              Categories
            </a>
          </li>
        </ul>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="/" className="user-profile">
              <img
                src={userIcon}
                alt="user icon"
                width="40"
                height="40"
                className="img-fluid rounded-circle border d-block p-2"
              />
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <BookList />
        <BookForm />
      </main>
    </div>
  );
}

export default App;
