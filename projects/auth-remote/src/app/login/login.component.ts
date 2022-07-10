import { Component } from '@angular/core'
import { NavigationService } from '@shared'

@Component({
  templateUrl: 'login.component.html',
  standalone: true,
  providers: [],
})
export class LoginComponent {
  constructor(private navigationService: NavigationService) { }

  public login(): void {
    this.navigationService.back()
  }
}
