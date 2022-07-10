import { Event, NavigationEnd, NavigationStart } from '@angular/router'

export const NavigationEndFilter = (event: Event): event is NavigationEnd => event instanceof NavigationEnd

export const NavigationStartFilter = (event: Event): event is NavigationStart => event instanceof NavigationStart