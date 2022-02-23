import MainScreen from '../main-screen/main-screen';
import React from 'react';
import { AppRoute, Authorization } from '../../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../login/login';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';

type AppScreenProps = {
  rentCount: number;
};

function App({ rentCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen rentCount={rentCount} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Property />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={Authorization.NotAuthorized}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
