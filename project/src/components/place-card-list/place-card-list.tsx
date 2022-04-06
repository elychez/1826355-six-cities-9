import PlaceCard from '../place-card/place-card';
import React from 'react';
import { useAppSelector } from '../../hooks/store';
import { Offer } from '../../types/offers';

type PlaceCardListProps = {
  isCitiesPlaces: boolean;
  nearbyOffers?: Offer[];
};

function PlaceCardList({
  isCitiesPlaces = true,
  nearbyOffers,
}: PlaceCardListProps): JSX.Element {
  const offers = useAppSelector((state) => state.cityOffers);
  const currentCityOffers = isCitiesPlaces ? offers : nearbyOffers;

  return (
    <div
      className={`${
        isCitiesPlaces ? 'cities__places-list' : 'near-places__list'
      } places__list tabs__content`}
    >
      {currentCityOffers?.map((offer: Offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          isCitiesPlaces={isCitiesPlaces}
        />
      ))}
    </div>
  );
}

export default PlaceCardList;
