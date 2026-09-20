import { tvMazeClient } from '@/shared/api/tvMazeClient'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import type { SearchResultI } from '../types/searchResult'
import { toValue, type MaybeRefOrGetter } from 'vue'

export async function searchShowApi({
  query,
}: {
  query: MaybeRefOrGetter<string>
}): Promise<TvMazeShowI[]> {
  const urlParams = new URLSearchParams()
  urlParams.append('q', toValue(query))

  const PATH = `/search/shows?${urlParams.toString()}`

  const response = await tvMazeClient.get<SearchResultI[]>(PATH)

  return response.map((result) => result.show)
}
