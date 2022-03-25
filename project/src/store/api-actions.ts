import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  APIRoute,
  AppRoute,
  Authorization,
  TIMEOUT_SHOW_ERROR
} from '../const';
import { api, store } from './index';
import { Offers } from '../types/offers';
import {
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  setError
} from './actions';
import { dropToken, saveToken } from '../services/tokens';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { errorHandle } from '../services/error-handle';

export const clearErrorAction = createAsyncThunk('app/clearError', () => {
  setTimeout(() => store.dispatch(setError('')), TIMEOUT_SHOW_ERROR);
});

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const { data } = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk('user/checkAuth', async () => {
  try {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(Authorization.Authorized));
  } catch (error) {
    errorHandle(error);
  }
});

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const {
        data: { token },
      } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      store.dispatch(requireAuthorization(Authorization.Authorized));
      store.dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(Authorization.NotAuthorized));
    }
  },
);

export const logoutAction = createAsyncThunk('user/logout', async () => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(Authorization.NotAuthorized));
  } catch (error) {
    errorHandle(error);
  }
});
