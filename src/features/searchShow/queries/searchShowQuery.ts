import { defineQueryOptions } from '@pinia/colada'
import { searchShowApi } from '../api/searchShowApi'
import { ApiError } from '@/shared/types/error'
import { toValue, type MaybeRefOrGetter } from 'vue'

export const searchShowQuery = defineQueryOptions(
  ({ query }: { query: MaybeRefOrGetter<string> }) => ({
    key: ['searchShow', toValue(query)],
    query: () => searchShowApi({ query: toValue(query) }),
    enabled: !!toValue(query),
    onError: (e: unknown) => {
      if (e instanceof ApiError) {
        throw e
      }

      throw new ApiError(500, e instanceof Error ? e.message : 'Unknown error')
    },
  }),
)
