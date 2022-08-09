import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { CITY } from '../mocks/city';
import {
  changeCity, changeFavoriteOffer,
  changeLoadStatus,
  changeSelectedPoint,
  changeSort, getUserData,
  loadCurrentOffers,
  loadExactOffer,
  loadFavorites,
  loadNearbyOffers,
  loadOffers,
  loadReviews,
  newCommentsList,
  requireAuthorization,
  setError
} from './actions';
import { Authorization, DEFAULT_SELECTED_POINT, SortType } from '../const';
import { City } from '../types/city';
import { SelectedPoint } from '../types/state';
import { Reviews } from '../types/reviews';
import {UserData} from '../types/user-data';

type State = {
  city: City;
  selectedPoint: SelectedPoint;
  favorites: Offer[];
  cityOffers: Offer[];
  offers: Offer[];
  sort: SortType;
  authorizationStatus: Authorization;
  INITIAL_ERROR: string;
  isDataLoaded: boolean;
  exactOffer: Offer | undefined;
  reviews: Reviews;
  nearbyOffers: Offer[];
  userData: UserData | undefined;
};

const initialState: State = {
  city: CITY,
  selectedPoint: DEFAULT_SELECTED_POINT,
  favorites: [],
  cityOffers: [],
  offers: [],
  sort: SortType.Default,
  authorizationStatus: Authorization.Unknown,
  INITIAL_ERROR: '',
  isDataLoaded: false,
  exactOffer: undefined,
  reviews: [],
  nearbyOffers: [],
  userData: undefined,
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadExactOffer, (state, action) => {
      state.exactOffer = action.payload;
    })
    .addCase(loadCurrentOffers, (state, action) => {
      state.cityOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(newCommentsList, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(changeFavoriteOffer, (state, action) => {
      const index = state.favorites.findIndex((offer) => offer.id === action.payload.id);
      state.favorites[index].isFavorite = action.payload.isFavorite;
    })
    .addCase(changeSelectedPoint, (state, action) => {
      state.selectedPoint = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeLoadStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.INITIAL_ERROR = action.payload;
    }),
);

export { reducer };
