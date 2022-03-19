import PlaceCard from '../place-card/place-card';
import React from 'react';
import { useAppSelector } from '../../hooks/store';

type PlaceCardListProps = {
  isCitiesPlaces: boolean;
};

function PlaceCardList({
  isCitiesPlaces = true,
}: PlaceCardListProps): JSX.Element {
  const offers = useAppSelector((state) => state.cityOffers);
  const currentCityOffers = isCitiesPlaces ? offers : offers.slice(0, 3);

  return (
    <div
      className={`${
        isCitiesPlaces ? 'cities__places-list' : 'near-places__list'
      } places__list tabs__content`}
    >
      {currentCityOffers.map((offer) => (
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
