import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'skins' },
  {
    path: 'skins',
    loadChildren: () =>
      import('./skins/skins.module').then((m) => m.SkinsModule),
  },
];
