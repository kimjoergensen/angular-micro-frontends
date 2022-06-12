import { RemotesService } from '../services/remotes.service'

export function initializeAppFactory(remotesService: RemotesService): () => Promise<void> {
  return (): Promise<void> => remotesService.initializeAppRemotes()
}