import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {State} from '@root-store/state';
import {environment} from '../../environments/environment';
import {localStorageSync} from 'ngrx-store-localstorage';


export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({rehydrate : true , keys: ['auth']})(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
