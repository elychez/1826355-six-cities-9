import { PointExpression } from 'leaflet';
import { City } from './types/city';
import { SelectedPoint } from './types/state';

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

export const CITIES: City[] = [
  {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 10,
  },
  {
    title: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 10,
  },
  {
    title: 'Brussels',
    lat: 50.846557,
    lng: 4.351697,
    zoom: 10,
  },
  {
    title: 'Amsterdam',
    lat: 52.37454,
    lng: 4.897976,
    zoom: 10,
  },
  {
    title: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
    zoom: 10,
  },
  {
    title: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
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
  lat: 0,
  lng: 0,
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
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
