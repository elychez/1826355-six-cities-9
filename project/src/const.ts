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
