import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import Favorites from '../types/favorites';
import { CITY } from '../mocks/city';
import {
  changeCity,
  changeSelectedPoint, changeSort,
  loadFavorites,
  loadOffers, requireAuthorization, setError
} from './actions';
import {Authorization, DEFAULT_SELECTED_POINT, SortType} from '../const';
import {offers} from '../mocks/offers';

const INITIAL_OFFERS: Offer[] = offers.filter((item) => item.city.title === 'Paris');
const INITIAL_FAVORITES: Favorites[] = [];

const initialState = {
  city: CITY,
  selectedPoint: DEFAULT_SELECTED_POINT,
  favoriteCity: INITIAL_FAVORITES,
  cityOffers: INITIAL_OFFERS,
  offers: offers,
  sort: SortType.Default,
  authorizationStatus: Authorization.Unknown,
  INITIAL_ERROR: '',
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.cityOffers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favoriteCity = action.payload;
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
    .addCase(setError, (state, action) => {
      state.INITIAL_ERROR = action.payload;
    }),
);

export { reducer };
