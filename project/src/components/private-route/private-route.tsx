import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, Authorization } from '../../const';
import React from 'react';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: Authorization;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return authorizationStatus === Authorization.Authorized ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
