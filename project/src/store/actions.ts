import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer, TLocation } from '../types/offers';
import Favorites from '../types/favorites';
import { SortType } from '../const';

export const changeCity = createAction<City>('changeCity');
export const loadOffers = createAction<Offer[]>('loadOffers');
export const loadFavorites = createAction<Favorites[]>('loadFavorites');
export const changeSelectedPoint = createAction<TLocation>(
  'changeSelectedPoint',
);
export const changeSort = createAction<SortType>('changeSort');
