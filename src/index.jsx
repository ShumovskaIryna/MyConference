/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer, compose(
  // applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
render(app, document.getElementById('root'));
