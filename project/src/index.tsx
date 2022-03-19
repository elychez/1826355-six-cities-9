import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { favorites } from './mocks/favorites';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        favorites={favorites}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
