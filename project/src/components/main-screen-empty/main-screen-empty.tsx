import React from 'react';
import Header from '../header/header';

function MainScreenEmpty(): JSX.Element {
  return (
    <>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='cities__no-places'>
            <div className='cities__status-wrapper tabs__content'>
              <b className='cities__status'>No places to stay available</b>
              <p className='cities__status-description'>
                We could not find any property available at the moment in
                Dusseldorf
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default MainScreenEmpty;
