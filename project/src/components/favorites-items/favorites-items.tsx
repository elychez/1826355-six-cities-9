import { Offer } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type FavoritesItemsProps = {
  cityName: string;
  offers: Offer[];
};

function FavoritesItems({
  cityName,
  offers,
}: FavoritesItemsProps): JSX.Element | null {

  return offers.length ? (
    <li key={cityName} className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#'>
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className='favorites__places'>
        {offers.map((offer: Offer) => (
          <PlaceCard isCitiesPlaces offer={offer} key={offer.id} />
        ))}
      </div>
    </li>
  ) : null;
}

export default FavoritesItems;
