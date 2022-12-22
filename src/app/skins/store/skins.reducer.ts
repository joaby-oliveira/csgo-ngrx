import { createReducer, on } from '@ngrx/store';
import { skinsActions } from '.';
import { Skin } from '../model/skin';

export interface State {
  skins: Skin[];
  isLoading: boolean;
  error?: string;
}

export const initialState: State = { skins: [], isLoading: false };

export const featureKey = 'skins';

export const skinsReducer = createReducer(
  initialState,
  on(skinsActions.loadSkins, (state, action) => {
    return { ...state, isLoading: true };
  }),
  on(skinsActions.loadSkinsSuccess, (state, action) => {
    return { ...state, skins: action.skins, isLoading: false };
  }),
  on(skinsActions.loadSkinsFailure, (state, action) => {
    return { ...state, error: action.error, isLoading: false };
  })
);
