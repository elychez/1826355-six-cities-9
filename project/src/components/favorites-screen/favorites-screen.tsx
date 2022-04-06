import React, { useEffect } from 'react';
import Header from '../header/header';
import { useAppSelector } from '../../hooks/store';
import { CITIES } from '../../const';
import FavoritesItems from '../favorites-items/favorites-items';
import { store } from '../../store';
import { getFavorites } from '../../store/api-actions';

function FavoritesScreen(): JSX.Element {
  const favorites = useAppSelector((state) => state.favorites);
  const filteredOffers = favorites.filter((item) => item.isFavorite);

  useEffect(() => {
    store.dispatch(getFavorites());
  }, []);

  return (
    <>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              {CITIES.map((cityName) => (
                <FavoritesItems
                  key={cityName.name}
                  cityName={cityName.name}
                  offers={filteredOffers.filter(
                    (offer) => offer.city.name === cityName.name,
                  )}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default FavoritesScreen;
