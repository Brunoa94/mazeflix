import { defineQueryOptions } from '@pinia/colada'
import { searchShowApi } from '../api/searchShowApi'

interface Props {
  query: string
}

export const searchShowQuery = defineQueryOptions(({ query }: Props) => ({
  key: ['searchShow', query],
  query: ({ signal }) => searchShowApi({ query, signal }),
  enabled: !!query,
}))
