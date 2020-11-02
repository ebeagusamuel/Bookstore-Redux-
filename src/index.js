import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [
    { id: 1, title: 'First book', category: 'Learning' },
    { id: 2, title: 'Second book', category: 'Horror' },
    { id: 3, title: 'Third book', category: 'Kids' },
    { id: 4, title: 'Fourth book', category: 'History' },
  ],
  filter: 'false',
};

/* eslint-disable */
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
