import type { GetParamsType } from '../types/apiClient'
import { ApiError } from '../types/error'

export function createApiClient({ domain, headers }: GetParamsType) {
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
