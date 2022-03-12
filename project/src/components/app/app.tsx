import MainScreen from '../main-screen/main-screen';
import React from 'react';
import { AppRoute, Authorization } from '../../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../login/login';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';
import { Offer } from '../../types/offers';
import Favorites from '../../types/favorites';
import {Review} from '../../types/reviews';

type AppScreenProps = {
  rentCount: number;
  offers: Offer[];
  favorites: Favorites[];
  reviews: Review[];
};

function App({
  rentCount,
  offers,
  favorites,
  reviews,
}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen rentCount={rentCount} offers={offers} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Property reviews={reviews} />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={Authorization.NotAuthorized}>
              <FavoritesScreen favorites={favorites} />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
