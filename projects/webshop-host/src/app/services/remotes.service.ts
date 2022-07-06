import { getManifest } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Manifest, RemoteConfig } from '../models/RemoteConfig';
import { RouteUtils } from '../utils/route.utils';

@Injectable()
export class RemotesService {
  private _remotes: RemoteConfig[] = [];

  public get remotes(): readonly RemoteConfig[] {
    return this._remotes;
  }

  constructor(private router: Router) {}

  public initializeAppRemotes(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const manifest = getManifest<Manifest>();
        const routes = RouteUtils.buildRoutes(manifest);
        this.router.resetConfig(routes);

        this._remotes = Object.values(manifest);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
