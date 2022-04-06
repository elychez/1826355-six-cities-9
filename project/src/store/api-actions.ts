import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  APIRoute,
  AppRoute,
  Authorization,
  TIMEOUT_SHOW_ERROR
} from '../const';
import { api, store } from './index';
import { Offer, Offers } from '../types/offers';
import {
  changeFavoriteOffer,
  changeLoadStatus, getUserData,
  loadCurrentOffers,
  loadExactOffer, loadFavorites, loadNearbyOffers,
  loadOffers, loadReviews, newCommentsList,
  redirectToRoute,
  requireAuthorization,
  setError
} from './actions';
import {dropToken, saveToken} from '../services/tokens';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { errorHandle } from '../services/error-handle';
import { Reviews } from '../types/reviews';

export const clearErrorAction = createAsyncThunk('app/clearError', () => {
  setTimeout(() => store.dispatch(setError('')), TIMEOUT_SHOW_ERROR);
});

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const { data } = await api.get<Offers>(APIRoute.Offers);
      const initialData = data.filter((item) => item.city.name === 'Paris');
      store.dispatch(loadOffers(data));
      store.dispatch(loadCurrentOffers(initialData));
      store.dispatch(changeLoadStatus(false));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchExactOfferAction = createAsyncThunk(
  'data/fetchExactOffers',
  async (id: any) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      store.dispatch(loadExactOffer(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'data/fetchReviews',
  async (id: any) => {
    try {
      const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk(
  'data/nearbyOffers',
  async (id: any) => {
    try {
      const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
      store.dispatch(loadNearbyOffers(data));
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
export const getLoginAction = createAsyncThunk(
  'user/getDataLogin',
  async () => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      store.dispatch(getUserData(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);


export const messageAction = createAsyncThunk(
  'user/message',
  async ({id: offerId, comment: comment, rating: rating}: any) => {
    try {
      const {data} =  await api.post<Reviews>(`${APIRoute.Comments}/${offerId}`, { comment, rating });
      store.dispatch(newCommentsList(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const logoutAction = createAsyncThunk('user/logout', async () => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(Authorization.NotAuthorized));
    store.dispatch(changeLoadStatus(false));
  } catch (error) {
    errorHandle(error);
  }
});

export const getFavorites = createAsyncThunk('data/favorites', async () => {
  const {data} = await api.get<Offer[]>(APIRoute.Favorite);
  store.dispatch(loadFavorites(data));
});

export const changeFavoriteStatusAction = (offerId: number, status: number) => createAsyncThunk('offer/changeFavoriteStatus', async () => {
  try {
    const { data } = await api.post<Offer>(`${AppRoute.Favorites}/${offerId}/${status}`);
    store.dispatch(changeFavoriteOffer(data));
  } catch (error) {
    errorHandle(error);
  }
})();
