import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.scss'],
  standalone: true,
  imports: [HeaderComponent, MainComponent, SidenavComponent, MatSidenavModule],
})
export class PageComponent {
  public sidenavOpen: boolean = true;
}
