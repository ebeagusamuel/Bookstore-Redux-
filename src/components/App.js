import React, { useEffect, useState } from 'react';

import userIcon from '../assets/user.svg';
import brandIcon from '../assets/brand.ico';

import BookList from '../containers/BookList';

function App() {
  const [displayFilter, setDisplayFilter] = useState(false);
  const [addBookForm, setAddBookForm] = useState(false);

  useEffect(() => {
    const handleNavLickClick = e => {
      if (e.target.id === 'filter') {
        e.preventDefault();
        setDisplayFilter(displayFilter => !displayFilter);
        setAddBookForm(false);
      }

      if (e.target.id === 'addBook') {
        e.preventDefault();
        setAddBookForm(addBookForm => !addBookForm);
        setDisplayFilter(false);
      }

      document.querySelectorAll('.active').forEach(item => item.classList.remove('active'));
      e.target.classList.add('active');
    };

    document
      .querySelectorAll('.nav-link')
      .forEach(link => link.addEventListener('click', handleNavLickClick));

    return document.removeEventListener('click', handleNavLickClick);
  }, []);
  return (
    <div className="Bookstore mx-auto rounded my-md-5 shadow-lg">
      <nav
        id="nav"
        className="nav d-flex align-items-center  justify-content-between py-3 border-bottom"
      >
        <ul className="list-unstyled mb-0 d-flex align-items-center justify-content-center flex-wrap">
          <li className="px-5 px-md-0">
            <a href="/" className="nav-brand mr-3 d-flex align-items-center text-decoration-none">
              <img src={brandIcon} alt="Brand icon" width="30" height="30" className="mr-1" />
              MyLibrary
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-uppercase text-muted" id="filter">
              Categories
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-uppercase text-muted" id="addBook">
              Add book
            </a>
          </li>
        </ul>

        <ul className="list-unstyled mb-0 d-none d-md-block">
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
        <BookList displayFilter={displayFilter} addBookForm={addBookForm} />
      </main>
    </div>
  );
}

export default App;
