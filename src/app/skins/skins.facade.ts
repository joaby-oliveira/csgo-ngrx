import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/root-store';
import { Skin } from './model/skin';
import { skinsSelectors } from './store';

@Injectable({ providedIn: 'root' })
export class SkinsFacade {
  constructor(private store: Store<AppState>) {}

  isLoading$: Observable<boolean> = this.store.select(skinsSelectors.isLoading);
  skins$: Observable<Skin[]> = this.store.select(skinsSelectors.skins);
  error$: Observable<string | undefined> = this.store.select(
    skinsSelectors.error
  );
}
