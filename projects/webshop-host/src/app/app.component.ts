import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-page></app-page>`,
})
export class AppComponent {
  public sidenavOpen: boolean = true;

  constructor() {}
}
