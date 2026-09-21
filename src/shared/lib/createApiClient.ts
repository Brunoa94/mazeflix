import { ApiError } from '../types/error'
import type { HeadersType } from '../types/headers'

interface Props {
  domain: string
  headers: HeadersType
}

export function createApiClient({ domain, headers }: Props) {
  return {
    get: async <T>(path: string, options?: { signal?: AbortSignal }): Promise<T> => {
      try {
        const url = `${domain}${path}`

        const response = await fetch(url, {
          method: 'GET',
          headers,
          signal: options?.signal,
        })

        if (!response.ok) {
          throw new ApiError(response.status, response.statusText)
        }

        return await response.json()
      } catch (e) {
        if (e instanceof ApiError) throw e

        throw new ApiError(500, e instanceof Error ? e.message : 'Network error')
      }
    },
  }
}
