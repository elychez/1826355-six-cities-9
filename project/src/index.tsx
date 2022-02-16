import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  RENT_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App rentCount={Setting.RENT_COUNT} />
  </React.StrictMode>,
  document.getElementById('root'));
