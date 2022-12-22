import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkinsComponent } from './container/skins.component';
import { RouterModule } from '@angular/router';
import { routes } from './skins.routes';
import { StoreModule } from '@ngrx/store';
import { fromSkins } from './store';
import { EffectsModule } from '@ngrx/effects';
import { SkinEffects } from './store/skins.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromSkins.featureKey, fromSkins.skinsReducer),
    EffectsModule.forFeature(SkinEffects),
  ],
  declarations: [SkinsComponent],
})
export class SkinsModule {}
