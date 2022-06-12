import { Component, EventEmitter, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule]
})
export class HeaderComponent {
  @Output() menuClick = new EventEmitter<void>();
}