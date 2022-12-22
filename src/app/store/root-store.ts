import { fromSkins } from '../skins/store';

export interface AppState {
  [fromSkins.featureKey]: fromSkins.State;
}
