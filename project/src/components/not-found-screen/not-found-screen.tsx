import { Link } from 'react-router-dom';
import Header from '../header/header';
import React from 'react';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <div>
            <h1 className='error__page--title'>404 Not Found</h1>
            <Link className='error__page--link' to='/'>
              Вернуться на главную
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
export default NotFoundScreen;
