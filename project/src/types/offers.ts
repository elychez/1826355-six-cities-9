import { User } from './user';

export type City = {
  location: TLocation;
  title: string;
};

export type TLocation = {
  lat: number;
  lng: number;
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
