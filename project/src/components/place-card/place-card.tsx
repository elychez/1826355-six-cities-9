import { Offer, TLocation } from '../../types/offers';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { changeSelectedPoint, redirectToRoute } from '../../store/actions';
import { AppRoute, Authorization, DEFAULT_SELECTED_POINT } from '../../const';
import { getPercent } from '../../utils';
import {changeFavoriteStatusAction, getFavorites} from '../../store/api-actions';
import { store } from '../../store';

type PlaceCardProps = {
  offer: Offer;
  isCitiesPlaces: boolean;
};

function PlaceCard({
  offer,
  isCitiesPlaces = true,
}: PlaceCardProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const [activePlaceCard, setActivePlaceCard] = useState<TLocation>(
    DEFAULT_SELECTED_POINT,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeSelectedPoint(activePlaceCard));
  }, [activePlaceCard]);

  const getOfferStatus = (favorite: boolean) => {
    let status: number;
    favorite ? (status = 0) : (status = 1);

    return status;
  };

  const onClickFavoriteButton = (offerId: number) => {
    if (authStatus === Authorization.Authorized) {
      dispatch(
        changeFavoriteStatusAction(offerId, getOfferStatus(offer.isFavorite)),
      );
      dispatch(getFavorites);
    } else {
      return store.dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  return (
    <article
      key={offer.id}
      className={`${
        isCitiesPlaces ? 'cities__place-card' : 'near-places__card'
      } place-card`}
      onMouseOver={() => setActivePlaceCard(offer.location)}
      onMouseLeave={() => setActivePlaceCard(DEFAULT_SELECTED_POINT)}
    >
      <div
        className={`${
          isCitiesPlaces
            ? 'cities__image-wrapper'
            : 'near-places__image-wrapper'
        } place-card__image-wrapper`}
      >
        <Link to={`/offer/${offer.id}`}>
          <img
            className='place-card__image'
            width='260'
            height='200'
            alt='Place image'
            src={offer.previewImage}
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button
            className={`${
              offer.isFavorite
                ? 'place-card__bookmark-button--active'
                : 'place-card__bookmark-button'
            } button`}
            onClick={() => onClickFavoriteButton(offer.id)}
            type='button'
          >
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark' />
            </svg>
            <span className='visually-hidden'>In bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: getPercent(offer.rating, 5) }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#'>{offer.title}</a>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
