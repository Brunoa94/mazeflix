import { defineQueryOptions } from '@pinia/colada'
import { searchShowApi } from '../api/searchShowApi'

export const searchShowQuery = defineQueryOptions(({ query }: { query: string }) => ({
  key: ['searchShow', query],
  query: ({ signal }) => searchShowApi({ query, signal }),
  enabled: !!query,
}))
