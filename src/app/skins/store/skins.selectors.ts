import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromSkins } from '.';

export const skinsFeatureSelector = createFeatureSelector<fromSkins.State>(
  fromSkins.featureKey
);

export const skins = createSelector(skinsFeatureSelector, ({ skins }) => skins);

export const isLoading = createSelector(
  skinsFeatureSelector,
  ({ isLoading }) => isLoading
);

export const error = createSelector(skinsFeatureSelector, ({ error }) => error);
