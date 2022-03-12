import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { favorites } from './mocks/favorites';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const Setting = {
  RENT_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentCount={Setting.RENT_COUNT}
      favorites={favorites}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
