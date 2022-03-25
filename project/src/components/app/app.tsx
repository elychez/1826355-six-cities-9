import MainScreen from '../main-screen/main-screen';
import React from 'react';
import { AppRoute, Authorization } from '../../const';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../login/login';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';
import Favorites from '../../types/favorites';
import { Review } from '../../types/reviews';
import { useAppSelector } from '../../hooks/store';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppScreenProps = {
  favorites: Favorites[];
  reviews: Review[];
};

function App({favorites, reviews}: AppScreenProps): JSX.Element {
  const { authorizationStatus, isDataLoaded } = useAppSelector(
    (state) => state,
  );
  const isCheckedAuth = (authorization: Authorization): boolean =>
    authorization === Authorization.NotAuthorized;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen />;
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen />} />
        <Route
          path={AppRoute.Login}
          element={
            authorizationStatus === Authorization.Authorized ? (
              <Navigate to={AppRoute.Root} />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen favorites={favorites} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Room} element={<Property reviews={reviews} />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
