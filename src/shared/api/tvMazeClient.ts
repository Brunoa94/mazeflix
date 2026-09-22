import { createApiClient } from '../lib/createApiClient'
import type { HeadersType } from '../types/headers'

const DOMAIN = import.meta.env.VITE_TV_MAZE_DOMAIN || 'https://api.tvmaze.com'

const HEADERS: HeadersType = {
  Accept: 'application/json',
}

export const tvMazeClient = createApiClient({
  headers: HEADERS,
  domain: DOMAIN,
})
