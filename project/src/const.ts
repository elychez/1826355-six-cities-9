import {PointExpression} from 'leaflet';

export enum AppRoute {
  Login = '/login',
  Root = '/',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum Authorization {
  Unknown = 'UNKNOWN',
  Authorized = 'AUTHORIZED',
  NotAuthorized = 'NOT_AUTHORIZED',
}

export const ICON_SIZE: PointExpression = [40, 40];
export const ICON_ANCHOR_SIZE: PointExpression = [20, 40];

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
