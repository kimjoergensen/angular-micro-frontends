import { Manifest as MfeManist, RemoteConfig as MfeRemoteConfig } from "@angular-architects/module-federation"

export type RemoteConfig = MfeRemoteConfig & {
  exposedModule: string
  displayName: string
  routePath: string,
  ngModuleName: string
}

export type Manifest = MfeManist<RemoteConfig>