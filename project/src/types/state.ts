import { store } from '../store';
import { TLocation } from './offers';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type SelectedPoint = TLocation;
