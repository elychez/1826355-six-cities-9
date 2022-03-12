import React from 'react';
import Header from '../header/header';
import Favorites from '../../types/favorites';
import { Offer } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type FavoritesScreenProps = {
  favorites: Favorites[];
};

function FavoritesScreen({ favorites }: FavoritesScreenProps): JSX.Element {
  return (
    <>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              {favorites.map(({ id, city, offers }: Favorites) => (
                <li key={id} className='favorites__locations-items'>
                  <div className='favorites__locations locations locations--current'>
                    <div className='locations__item'>
                      <a className='locations__item-link' href='#'>
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className='favorites__places'>
                    {offers.map((offer: Offer) => (
                      <PlaceCard key={offer.id} offer={offer} isCitiesPlaces />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default FavoritesScreen;
