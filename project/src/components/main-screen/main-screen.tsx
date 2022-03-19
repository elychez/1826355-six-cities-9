import Header from '../header/header';
import React from 'react';
import PlaceCardList from '../place-card-list/place-card-list';
import { Map } from '../map/map';
import Cities from '../cities/cities';
import { useAppSelector } from '../../hooks/store';
import Sorting from '../sorting/sorting';

function MainScreen(): JSX.Element {
  const cityOffers = useAppSelector((state) => state.cityOffers);
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);

  function getAllPoints() {

    return offers.map((item) => ({
      title: item.city.title,
      lat: item.location.lat,
      lng: item.location.lng,
    }));
  }


  return (
    <div className='page page--gray page--main'>
      <Header />

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <Cities />
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {cityOffers.length} places to stay in {currentCity.title}
              </b>
              <Sorting/>
              <div className='cities__places-list places__list tabs__content'>
                <PlaceCardList isCitiesPlaces />
              </div>
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  city={currentCity}
                  points={getAllPoints()}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
