import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skin } from '../model/skin';
import { environment } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })
export class SkinsApi {
  constructor(private httpClient: HttpClient) {}

  public getSkins(): Observable<Skin[]> {
    return this.httpClient.get<Skin[]>(`${environment.apiUrl}skinass.json`);
  }
}
