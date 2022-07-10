import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { UrlService } from '../services/url.service';

@Component({
  template: ``,
  standalone: true,
  providers: [Router, ActivatedRoute, UrlService],
})
export class LoginComponent {
  private currentUrl?: string;

  constructor(private router: Router, private route: ActivatedRoute, private urlService: UrlService) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe((event) => {
      console.log('event', event);
    });
  }
}
