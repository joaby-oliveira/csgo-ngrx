import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { skinsActions } from '.';
import { SkinsApi } from '../api/skins.api';

@Injectable()
export class SkinEffects {
  constructor(private actions$: Actions, private skinsApi: SkinsApi) {}

  loadSkins$ = createEffect(() =>
    this.actions$.pipe(
      ofType(skinsActions.loadSkins),
      mergeMap(() =>
        this.skinsApi
          .getSkins()
          .pipe(map((skins) => skinsActions.loadSkinsSuccess({ skins })))
      ),
      catchError((error: HttpErrorResponse) =>
        of(skinsActions.loadSkinsFailure({ error: error.name }))
      )
    )
  );
}
