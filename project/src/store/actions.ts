import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer, TLocation } from '../types/offers';
import {AppRoute, Authorization, SortType} from '../const';
import { Reviews } from '../types/reviews';
import {UserData} from '../types/user-data';

export const changeCity = createAction<City>('changeCity');
export const loadOffers = createAction<Offer[]>('loadOffers');
export const loadCurrentOffers = createAction<Offer[]>('loadCurrentOffers');
export const loadFavorites = createAction<Offer[]>('loadFavorites');
export const changeSelectedPoint = createAction<TLocation>(
  'changeSelectedPoint',
);
export const changeSort = createAction<SortType>('changeSort');
export const requireAuthorization = createAction<Authorization>('user/requireAuthorization');
export const setError = createAction<string>('app/setError');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const loadExactOffer = createAction<Offer>('loadExactOffer');
export const loadReviews = createAction<Reviews>('loadReviews');
export const newCommentsList = createAction<Reviews>('newCommentsList');
export const loadNearbyOffers = createAction<Offer[]>('loadNearbyOffers');
export const changeLoadStatus = createAction<boolean>('changeLoadStatus');
export const getUserData = createAction<UserData>('getUserData');
export const changeFavoriteOffer = createAction<Offer>('changeFavoriteOffer');
