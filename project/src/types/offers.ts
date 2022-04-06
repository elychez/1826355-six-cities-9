import { User } from './user';

export type City = {
  location: TLocation;
  name: string;
};

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: User;
  id: any;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: TLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Offers = Offer[];
