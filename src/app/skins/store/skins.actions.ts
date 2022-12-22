import { createAction, props } from '@ngrx/store';
import { Skin } from '../model/skin';

export const LOAD_SKINS = '[Skin Page] Load Skins';
export const LOAD_SKINS_SUCCESS = '[Skin Page] Load Skins Success';
export const LOAD_SKINS_FAILURE = '[Skin Page] Load Skins Failure';

export const loadSkins = createAction(LOAD_SKINS);

export const loadSkinsSuccess = createAction(
  LOAD_SKINS_SUCCESS,
  props<{ skins: Skin[] }>()
);

export const loadSkinsFailure = createAction(
  LOAD_SKINS_FAILURE,
  props<{ error: string }>()
);
