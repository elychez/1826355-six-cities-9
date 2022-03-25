import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { favorites } from './mocks/favorites';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './error-message/error-message';
import { checkAuthAction, fetchOfferAction } from './store/api-actions';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App favorites={favorites} reviews={reviews} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
