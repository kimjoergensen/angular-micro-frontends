import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class UrlService {
  public readonly previousUrl$ = new BehaviorSubject<string>('/');
}
