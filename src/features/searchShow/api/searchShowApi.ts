import { tvMazeClient } from '@/shared/api/tvMazeClient'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import type { SearchResultI } from '../types/searchResult'
import { toValue, type MaybeRefOrGetter } from 'vue'
import { throwApiError } from '@/shared/helpers/throwApiError'

interface Props {
  query: MaybeRefOrGetter<string>
  signal?: AbortSignal
}

export async function searchShowApi({ query, signal }: Props): Promise<TvMazeShowI[]> {
  try {
    const urlParams = new URLSearchParams()
    urlParams.append('q', toValue(query))

    const PATH = `/search/shows?${urlParams.toString()}`

    const response = await tvMazeClient.get<SearchResultI[]>(PATH, { signal })

    return response.map((result) => result.show)
  } catch (e) {
    throwApiError({ e, endpoint: 'SEARCH_SHOW' })
  }
}
