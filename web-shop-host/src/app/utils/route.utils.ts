import { loadRemoteModule } from '@angular-architects/module-federation'
import { Routes } from '@angular/router'
import { routes } from '../app-routing.module'
import { Manifest } from '../models/RemoteConfig'

export class RouteUtils {
  public static buildRoutes(options: Manifest): Routes {
    const lazyRoutes: Routes = Object.keys(options).map(key => {
      const entry = options[key]
      return {
        path: entry.routePath,
        loadChildren: () => loadRemoteModule(
          {
            type: 'manifest',
            remoteName: key,
            exposedModule: entry.exposedModule
          })
          .then((esModule) => esModule[entry.ngModuleName])
      }
    })

    return [...routes, ...lazyRoutes]
  }
}