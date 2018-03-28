import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import RootReducer from './reducers';
import Routes from './routes';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.querySelector('.container-fluid')
);