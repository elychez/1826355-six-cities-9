import PlaceCard from '../place-card/place-card';
import React from 'react';
import { Offer } from '../../types/offers';

type PlaceCardListProps = {
  offers: Offer[];
  isCitiesPlaces: boolean;
};

function PlaceCardList({
  offers,
  isCitiesPlaces = true,
}: PlaceCardListProps): JSX.Element {
  return (
    <div
      className={`${
        isCitiesPlaces ? 'cities__places-list' : 'near-places__list'
      } places__list tabs__content`}
    >
      {offers.map((offer) => (
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
