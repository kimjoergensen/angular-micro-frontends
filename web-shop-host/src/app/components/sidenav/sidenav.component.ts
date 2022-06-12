import { CommonModule } from '@angular/common'
import { Component, ViewChild } from '@angular/core'
import { MatListModule } from '@angular/material/list'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { RouterModule } from '@angular/router'
import { RemoteConfig } from 'src/app/models/RemoteConfig'
import { RemotesService } from 'src/app/services/remotes.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatSidenavModule]
})
export class SidenavComponent {
  public open: boolean = true;
  public remotes: readonly RemoteConfig[] = [];

  @ViewChild('sidenav') sidenavRef!: MatSidenav

  constructor(private remotesService: RemotesService) { }

  ngOnInit(): void {
    this.remotes = this.remotesService.remotes
  }

  public toggle(): void {
    this.sidenavRef.toggle()
  }
}