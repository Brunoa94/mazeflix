import { ApiError } from '../types/error'
import type { HeadersType } from '../types/headers'

export function createApiClient({ domain, headers }: { domain: string; headers: HeadersType }) {
  return {
    get: async <T>(path: string): Promise<T> => {
      const url = `${domain}${path}`

      const response = await fetch(url, {
        method: 'GET',
        headers,
      })

      if (!response.ok) {
        throw new ApiError(response.status, response.statusText, path)
      }

      return await response.json()
    },
  }
}
