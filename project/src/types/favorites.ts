import { Offer } from './offers';

type Favorites = {
  id: number;
  city: string;
  offers: Offer[];
};

export default Favorites;
