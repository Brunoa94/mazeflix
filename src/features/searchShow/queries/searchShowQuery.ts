import { defineQueryOptions } from '@pinia/colada'
import { searchShowApi } from '../api/searchShowApi'
import { ApiError } from '@/shared/types/error'

export const searchShowQuery = defineQueryOptions(({ query }: { query: string }) => ({
  key: ['searchShow', query],
  query: ({ signal }) => searchShowApi({ query, signal }),
  enabled: !!query,
  onError: (e: unknown) => {
    if (e instanceof ApiError) {
      throw e
    }

    throw new ApiError(500, e instanceof Error ? e.message : 'Unknown error')
  },
}))
