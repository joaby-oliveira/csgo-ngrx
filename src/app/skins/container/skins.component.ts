import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-store';
import { SkinsFacade } from '../skins.facade';
import { skinsActions } from '../store';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss'],
})
export class SkinsComponent implements OnInit {
  constructor(private store: Store<AppState>, public facade: SkinsFacade) {}

  ngOnInit() {
    this.store.dispatch(skinsActions.loadSkins());
  }
}
