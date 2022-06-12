import { Component, ViewChild } from '@angular/core'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
  standalone: true,
  imports: [MatSidenavModule]
})
export class SidenavComponent {
  public open: boolean = true;

  @ViewChild('sidenav') sidenavRef!: MatSidenav

  public toggle(): void {
    this.sidenavRef.toggle()
  }
}