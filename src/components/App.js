import React, { useEffect, useState } from 'react';

import userIcon from '../assets/user.svg';

import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

function App() {
  const [displayFilter, setDisplayFilter] = useState(false);

  useEffect(() => {
    const handleNavLickClick = e => {
      if (e.target.id === 'filter') {
        e.preventDefault();
        setDisplayFilter(displayFilter => !displayFilter);
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
    <div className="Bookstore mx-auto rounded my-5 shadow-lg">
      <nav className="nav d-flex align-items-center justify-content-between py-3 border-bottom">
        <ul className="list-unstyled mb-0 d-flex align-items-center">
          <li>
            <a href="/" className="nav-brand mr-3">
              Bookstore CMS
            </a>
          </li>
          <li>
            <a href="/" className="nav-link active text-uppercase text-dark">
              Books
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-uppercase text-muted" id="filter">
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
        <BookList displayFilter={displayFilter} />
        <BookForm />
      </main>
    </div>
  );
}

export default App;
