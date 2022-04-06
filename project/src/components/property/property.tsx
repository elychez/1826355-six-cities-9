import Header from '../header/header';
import React, { useEffect } from 'react';
import CommentForm from '../comment-form/comment-form';
import ReviewList from '../review-list/review-list';
import { Map } from '../map/map';
import PlaceCardList from '../place-card-list/place-card-list';
import { useAppSelector } from '../../hooks/store';
import { useParams } from 'react-router-dom';
import { store } from '../../store';
import {
  fetchExactOfferAction,
  fetchNearbyOffersAction
} from '../../store/api-actions';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function Property(): JSX.Element {
  const { id } = useParams();

  const cityOffers = useAppSelector((state) => state.cityOffers);
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const offer = useAppSelector((state) => state.exactOffer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const offersId = offers.map((item) => item.id);
  const checkOffers = offersId.includes(Number(id));

  useEffect(() => {
    store.dispatch(fetchExactOfferAction(id));
    store.dispatch(fetchNearbyOffersAction(id));
  }, [id]);

  function getAllPoints() {
    return cityOffers.map((item) => ({
      name: item.city.name,
      latitude: item.location.latitude,
      longitude: item.location.longitude,
    }));
  }

  return (
    <>
      {checkOffers && (
        <>
          <Header />
          <main className='page__main page__main--property'>
            <section className='property'>
              <div className='property__gallery-container container'>
                <div className='property__gallery'>
                  {offer?.images.map((item) => (
                    <div key={item} className='property__image-wrapper'>
                      <img
                        className='property__image'
                        src={item}
                        alt='studio'
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className='property__container container'>
                <div className='property__wrapper'>
                  <div className='property__mark'>
                    <span>{offer?.isPremium}</span>
                  </div>
                  <div className='property__name-wrapper'>
                    <h1 className='property__name'>{offer?.title}</h1>
                    <button
                      className='property__bookmark-button button'
                      type='button'
                    >
                      <svg
                        className='property__bookmark-icon'
                        width='31'
                        height='33'
                      >
                        <use xlinkHref='#icon-bookmark' />
                      </svg>
                      <span className='visually-hidden'>To bookmarks</span>
                    </button>
                  </div>
                  <div className='property__rating rating'>
                    <div className='property__stars rating__stars'>
                      <span style={{ width: '80%' }} />
                      <span className='visually-hidden'>Rating</span>
                    </div>
                    <span className='property__rating-value rating__value'>
                      {offer?.rating}
                    </span>
                  </div>
                  <ul className='property__features'>
                    <li className='property__feature property__feature--entire'>
                      {offer?.type}
                    </li>
                    <li className='property__feature property__feature--bedrooms'>
                      {offer?.bedrooms} Bedrooms
                    </li>
                    <li className='property__feature property__feature--adults'>
                      Max {offer?.maxAdults} adults
                    </li>
                  </ul>
                  <div className='property__price'>
                    <b className='property__price-value'>
                      &euro;{offer?.price}
                    </b>
                    <span className='property__price-text'>&nbsp;night</span>
                  </div>
                  <div className='property__inside'>
                    <h2 className='property__inside-title'>
                      What&apos;s inside
                    </h2>
                    <ul className='property__inside-list'>
                      {offer?.goods.map((item) => (
                        <li key={item} className='property__inside-item'>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='property__host'>
                    <h2 className='property__host-title'>Meet the host</h2>
                    <div className='property__host-user user'>
                      <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                        <img
                          className='property__avatar user__avatar'
                          src={offer?.host.avatarUrl}
                          width='74'
                          height='74'
                          alt='Host avatar'
                        />
                      </div>
                      <span className='property__user-name'>
                        {offer?.host.name}
                      </span>
                      <span className='property__user-status'>
                        {offer?.host.isPro}
                      </span>
                    </div>
                    <div className='property__description'>
                      <p className='property__text'>{offer?.description}</p>
                    </div>
                  </div>
                  <section className='property__reviews reviews'>
                    <h2 className='reviews__title'>
                      Reviews &middot;{' '}
                      <span className='reviews__amount'>{reviews.length}</span>
                    </h2>
                    <ReviewList offerId={id} />
                    <CommentForm offerId={id} />
                  </section>
                </div>
              </div>
              <section className='property__map map'>
                <Map city={currentCity} points={getAllPoints()} />
              </section>
            </section>
            <div className='container'>
              <section className='near-places places'>
                <h2 className='near-places__title'>
                  Other places in the neighbourhood
                </h2>
                <PlaceCardList
                  isCitiesPlaces={false}
                  nearbyOffers={nearbyOffers}
                />
              </section>
            </div>
          </main>
        </>
      )}
      {!checkOffers && <NotFoundScreen />}
    </>
  );
}

export default Property;
