import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { RemoteConfig } from '../../models/RemoteConfig';
import { RemotesService } from '../../services/remotes.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule],
})
export class SidenavComponent {
  public open: boolean = true;
  public remotes: readonly RemoteConfig[] = [];

  @ViewChild('sidenav') sidenavRef!: MatSidenav;

  constructor(private remotesService: RemotesService) {}

  ngOnInit(): void {
    this.remotes = this.remotesService.remotes;
  }

  public toggle(): void {
    this.sidenavRef.toggle();
  }
}
