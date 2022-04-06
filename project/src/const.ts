import { PointExpression } from 'leaflet';
import { City } from './types/city';
import { SelectedPoint } from './types/state';

export enum AppRoute {
  Login = '/login',
  Root = '/',
  Favorites = '/favorite',
  Room = '/offer/:id',
}

export enum Authorization {
  Unknown = 'UNKNOWN',
  Authorized = 'AUTHORIZED',
  NotAuthorized = 'NOT_AUTHORIZED',
}

export const CITIES: City[] = [
  {
    name: 'Paris',
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 10,
  },
  {
    name: 'Cologne',
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 10,
  },
  {
    name: 'Brussels',
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 10,
  },
  {
    name: 'Amsterdam',
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 10,
  },
  {
    name: 'Hamburg',
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 10,
  },
  {
    name: 'Dusseldorf',
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 10,
  },
];

export const ICON_SIZE: PointExpression = [40, 40];
export const ICON_ANCHOR_SIZE: PointExpression = [20, 40];

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const DEFAULT_SELECTED_POINT: SelectedPoint = {
  latitude: 0,
  longitude: 0,
  zoom: 0,
};

export enum SortType {
  Default = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite'
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
