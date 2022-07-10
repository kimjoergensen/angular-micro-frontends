import { Location } from '@angular/common'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { filter, map } from 'rxjs'
import { NavigationEndFilter } from '../utils/navigation.utils'

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private history: string[] = [];

  constructor(private router: Router, private location: Location) {
    router.events
      .pipe(
        filter(NavigationEndFilter),
        map((event) => event.urlAfterRedirects))
      .subscribe(this.history.push)
  }

  public back(): void {
    this.history.pop()
    if (this.history.length > 0)
      this.location.back()
    else {
      this.router.navigateByUrl('/')
    }
  }
}